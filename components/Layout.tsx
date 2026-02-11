import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertises', path: '/catalogue' },
    { name: 'Calendrier', path: '/sessions' },
    { name: 'L\'Agence', path: '/agency' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${scrolled ? 'pt-4' : 'pt-6'}`}>
        <div className={`relative transition-all duration-500 ${scrolled ? 'w-[90%] max-w-5xl' : 'w-[95%] max-w-7xl'}`}>
          <div className={`px-6 py-3 rounded-full flex justify-between items-center transition-all duration-500 ${
            scrolled 
              ? 'bg-pep-dark/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20' 
              : 'bg-transparent'
          }`}>
            
            {/* Logo */}
            <Link to="/" className="relative z-50 flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-pep-orange to-pep-violet rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
              </div>
              <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? 'text-white' : 'text-pep-dark'}`}>
                PEP<span className="text-pep-orange">.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-white text-pep-dark shadow-md' 
                      : scrolled ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-pep-dark hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
               <Link to="/contact" className="group relative px-6 py-2.5 bg-pep-dark text-white rounded-full overflow-hidden transition-all hover:bg-pep-orange">
                 <span className="relative z-10 text-sm font-bold flex items-center gap-2">
                   Devis
                   <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                 </span>
               </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden relative z-50 p-2 rounded-full ${scrolled ? 'text-white hover:bg-white/10' : 'text-pep-dark hover:bg-black/5'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-pep-dark z-40 transition-all duration-700 ease-[0.16,1,0.3,1] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, idx) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:to-pep-orange transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="mt-12 px-10 py-5 bg-pep-orange text-white text-xl font-bold rounded-full hover:scale-105 transition-transform"
          >
            Lancer un projet
          </Link>
        </div>
      </div>
    </>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pep-darker text-white pt-32 pb-10 rounded-t-[3rem] mt-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pep-violet/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
           <div className="max-w-xl">
              <h2 className="font-display font-bold text-5xl md:text-7xl mb-8 leading-[0.9] tracking-tighter">
                Sécurisez <br/>
                <span className="text-pep-orange">L'avenir.</span>
              </h2>
              <div className="flex gap-4">
                  <Link to="/contact" className="px-8 py-4 bg-white text-pep-dark font-bold rounded-full hover:bg-pep-turquoise transition-colors">
                    Démarrer maintenant
                  </Link>
                  <Link to="/catalogue" className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                    Nos formations
                  </Link>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-lg">
              <div>
                <h4 className="font-bold text-gray-500 mb-6 uppercase tracking-widest text-xs">Menu</h4>
                <ul className="space-y-4">
                  <li><Link to="/catalogue" className="hover:text-pep-orange transition-colors">Expertises</Link></li>
                  <li><Link to="/sessions" className="hover:text-pep-orange transition-colors">Calendrier</Link></li>
                  <li><Link to="/agency" className="hover:text-pep-orange transition-colors">L'Agence</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-500 mb-6 uppercase tracking-widest text-xs">Social</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-pep-orange transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-pep-orange transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-pep-orange transition-colors">Facebook</a></li>
                </ul>
              </div>
           </div>
        </div>

        {/* Big Brand Name */}
        <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="text-sm text-gray-500 space-y-1">
                    <p>61 Rue de Lyon, 75012 Paris</p>
                    <p>06 52 83 18 77 • contact@pepformation.com</p>
                    <div className="flex gap-4 mt-4 text-xs">
                        <Link to="/legal/mentions" className="hover:text-white">Mentions</Link>
                        <Link to="/legal/privacy" className="hover:text-white">Confidentialité</Link>
                    </div>
                </div>
                <h1 className="font-display font-black text-[12vw] leading-none text-white/5 select-none pointer-events-none">
                    PEP.
                </h1>
            </div>
        </div>
      </div>
    </footer>
  );
};