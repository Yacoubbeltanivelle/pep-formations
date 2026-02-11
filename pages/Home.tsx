import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, HardHat, Zap, Shield, ChevronRight, Star } from 'lucide-react';

const Marquee = () => (
  <div className="bg-pep-orange py-4 overflow-hidden relative rotate-1 scale-105 transform origin-left z-20">
    <div className="flex animate-marquee whitespace-nowrap gap-12 text-white font-display font-bold text-2xl uppercase tracking-widest">
      <span>SST • CACES • Incendie • Gestes & Postures • Habilitation Électrique •</span>
      <span>SST • CACES • Incendie • Gestes & Postures • Habilitation Électrique •</span>
      <span>SST • CACES • Incendie • Gestes & Postures • Habilitation Électrique •</span>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-pep-light pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-gray-100 to-transparent clip-diagonal opacity-50"></div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-pep-orange/5 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pep-violet/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pep-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pep-orange"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Prochaines sessions disponibles</span>
            </div>

            <h1 className="font-display font-extrabold text-6xl md:text-8xl tracking-tighter leading-[0.95] text-pep-dark animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              VITAL <br/>
              SKILLS <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pep-orange to-pep-violet">
                FOR LIFE.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Ne formez pas pour la loi. Formez pour la vie. <br/>
              L'organisme nouvelle génération pour la santé et sécurité au travail.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/catalogue" className="group relative px-8 py-4 bg-pep-dark text-white rounded-full font-bold overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pep-dark/20 transition-all">
                <div className="absolute inset-0 w-full h-full bg-pep-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Explorer le catalogue <ArrowRight size={18} />
                </span>
              </Link>
              <Link to="/sessions" className="px-8 py-4 bg-white border border-gray-200 text-pep-dark rounded-full font-bold hover:bg-gray-50 transition-colors">
                Calendrier
              </Link>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:col-span-5 relative animate-reveal" style={{ animationDelay: '0.5s' }}>
             <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Formation Sécurité" 
                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pep-dark/80 to-transparent"></div>
                
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="flex -space-x-3">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                            ))}
                        </div>
                        <div className="text-sm font-bold">
                            +500 élèves <br/> formés cette année
                        </div>
                    </div>
                    <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-[98%] bg-pep-orange"></div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
                <h2 className="font-display font-bold text-5xl md:text-6xl text-pep-dark mb-4 tracking-tight">
                    Expertise <br/> <span className="text-pep-orange">Terrain.</span>
                </h2>
            </div>
            <p className="max-w-md text-gray-500 text-lg">
                Une approche pédagogique basée sur la pratique réelle, loin des diapositives théoriques interminables.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            {/* Card 1: Large */}
            <div className="md:col-span-2 bg-pep-light rounded-[2.5rem] p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-pep-turquoise/10 rounded-full blur-[80px] group-hover:bg-pep-turquoise/20 transition-colors"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-pep-dark mb-6 shadow-sm">
                        <Activity size={32} />
                    </div>
                    <div>
                        <h3 className="font-display font-bold text-3xl mb-4">Réactivité Absolue</h3>
                        <p className="text-gray-500 text-lg max-w-md">
                            Dans l'urgence ou la planification, nous répondons présent. Devis en 24h, sessions hebdomadaires.
                        </p>
                    </div>
                    <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                        className="absolute bottom-0 right-0 w-1/2 h-2/3 object-cover rounded-tl-[2.5rem] opacity-80 group-hover:scale-105 transition-transform duration-700" 
                        alt="Planning"
                    />
                </div>
            </div>

            {/* Card 2: Tall */}
            <div className="bg-pep-dark text-white rounded-[2.5rem] p-10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-pep-dark to-pep-darker"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pep-orange/20 to-transparent"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-pep-orange mb-auto border border-white/5">
                        <HardHat size={32} />
                    </div>
                    <h3 className="font-display font-bold text-3xl mb-4">Conformité</h3>
                    <p className="text-gray-400 text-lg mb-8">
                        Programmes à jour des dernières réglementations INRS et Code du Travail.
                    </p>
                    <Link to="/agency" className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all text-pep-orange">
                        En savoir plus <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

            {/* Card 3: Wide Bottom */}
            <div className="md:col-span-3 bg-pep-violet rounded-[2.5rem] p-10 relative overflow-hidden text-white flex flex-col md:flex-row items-center gap-10 group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm">
                    <Zap size={32} />
                </div>
                <div className="flex-1">
                    <h3 className="font-display font-bold text-3xl mb-2">Pédagogie Active</h3>
                    <p className="text-white/80 text-lg">Moins de slides, plus de pratique. Ancrage mémoriel par l'action.</p>
                </div>
                <div className="flex -space-x-4">
                     {[1,2,3,4].map(i => (
                         <div key={i} className="w-12 h-12 rounded-full border-2 border-pep-violet bg-white/20 backdrop-blur-md flex items-center justify-center text-xs font-bold">
                             {i === 4 ? '+' : ''}
                         </div>
                     ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <main className="bg-pep-light">
      <Hero />
      <Marquee />
      <BentoGrid />
      
      {/* Visual CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
            <div className="relative rounded-[3rem] bg-pep-dark overflow-hidden py-32 px-10 text-center">
                {/* Background Video/Image aesthetics */}
                <div className="absolute inset-0 opacity-20">
                     <img src="https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale" />
                </div>
                
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="font-display font-bold text-5xl md:text-7xl text-white mb-8 tracking-tighter">
                        PRÊT À <span className="text-pep-orange">AGIR ?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Que vous soyez une entreprise ou un particulier, la sécurité n'attend pas.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact" className="px-12 py-5 bg-pep-orange text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(236,82,11,0.4)]">
                        Demander un devis
                        </Link>
                        <Link to="/catalogue" className="px-12 py-5 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white hover:text-pep-dark transition-all">
                        Voir les formations
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
};