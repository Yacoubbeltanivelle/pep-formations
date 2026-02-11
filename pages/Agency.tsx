import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Award, ShieldCheck, HeartPulse } from 'lucide-react';

export const Agency = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-pep-dark text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
           <div className="absolute top-10 left-10 w-64 h-64 bg-pep-violet/20 rounded-full blur-[80px]"></div>
           <div className="absolute bottom-10 right-10 w-80 h-80 bg-pep-orange/10 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-pep-orange font-bold tracking-widest uppercase text-sm mb-4 block animate-pulse-slow">L'Agence</span>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-8 leading-tight">
            Au-delà de la <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pep-turquoise to-white">conformité.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Nous ne vendons pas des attestations. Nous transmettons les réflexes qui protègent vos équipes et pérennisent votre activité.
          </p>
        </div>
      </section>

      {/* DNA Section */}
      <section className="py-24 bg-pep-light">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-display font-bold text-4xl text-pep-dark mb-6">L'ADN Pep Formations</h2>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        Né du constat que trop de formations sécurité sont vécues comme des contraintes administratives, PEP (Pédagogie, Expertise, Prévention) change la donne.
                    </p>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Notre conviction : un collaborateur formé est un collaborateur valorisé. La sécurité est le socle de la performance durable.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-pep-orange/10 text-pep-orange rounded-full flex items-center justify-center shrink-0">
                                <Target size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-pep-dark">Pragmatisme</h4>
                                <p className="text-sm text-gray-500">Des mises en situation réalistes, adaptées à votre secteur.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-pep-violet/10 text-pep-violet rounded-full flex items-center justify-center shrink-0">
                                <HeartPulse size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-pep-dark">Engagement</h4>
                                <p className="text-sm text-gray-500">Des formateurs passionnés qui captent l'attention.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-pep-orange transform translate-x-4 translate-y-4 rounded-3xl"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                        alt="Équipe en réunion" 
                        className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-20 bg-pep-dark text-white">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                  <div className="text-5xl font-display font-bold text-pep-orange mb-2">98%</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Réussite aux examens</div>
              </div>
              <div>
                  <div className="text-5xl font-display font-bold text-pep-turquoise mb-2">50+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Entreprises partenaires</div>
              </div>
              <div>
                  <div className="text-5xl font-display font-bold text-pep-violet mb-2">24h</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Délai moyen de devis</div>
              </div>
              <div>
                  <div className="text-5xl font-display font-bold text-white mb-2">4.9</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Note de satisfaction</div>
              </div>
          </div>
      </section>

      {/* Quality */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6 text-pep-dark">
                  <Award size={32} />
              </div>
              <h2 className="font-display font-bold text-3xl mb-6">Une démarche qualité rigoureuse</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Nous nous engageons à respecter les standards les plus exigeants de la formation professionnelle. Nos processus sont audités régulièrement pour garantir une traçabilité administrative parfaite et une excellence pédagogique constante.
              </p>
              <div className="inline-block px-8 py-4 border-2 border-pep-dark/10 rounded-2xl bg-gray-50">
                  <span className="font-bold text-pep-dark flex items-center gap-2">
                      <ShieldCheck className="text-green-600" />
                      Conforme aux exigences Qualiopi (Processus en cours)
                  </span>
              </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-pep-light border-t border-gray-100">
          <div className="container mx-auto px-6 text-center">
              <h2 className="font-display font-bold text-3xl mb-8">Envie de travailler avec nous ?</h2>
              <Link to="/contact" className="inline-block px-10 py-4 bg-pep-dark text-white font-bold rounded-full hover:bg-pep-orange transition-colors shadow-lg shadow-pep-dark/20">
                  Parlez-nous de votre projet
              </Link>
          </div>
      </section>
    </div>
  );
};