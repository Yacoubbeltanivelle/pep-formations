import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [type, setType] = useState<'B2B' | 'B2C'>('B2B');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <div className="min-h-screen bg-pep-light flex items-center justify-center p-6">
            <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                </div>
                <h2 className="text-3xl font-bold text-pep-dark mb-4">Message reçu !</h2>
                <p className="text-gray-600 mb-8">Notre équipe a bien reçu votre demande. Nous vous répondrons sous 24h ouvrées.</p>
                <button onClick={() => setSubmitted(false)} className="text-pep-orange font-bold hover:underline">Retour au formulaire</button>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-pep-dark text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-pep-orange/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <div>
            <span className="text-pep-orange font-bold tracking-widest uppercase text-sm mb-4 block">Contactez-nous</span>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-8 leading-tight">
                Construisons votre <br/> plan de formation.
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
                Que vous ayez besoin d'un devis sur-mesure ou d'une information rapide, nous sommes là.
            </p>

            <div className="space-y-8">
                <div>
                    <h3 className="text-white font-bold text-lg mb-2">Siège Social</h3>
                    <p className="text-gray-400">61 Rue de Lyon, 75012 Paris</p>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg mb-2">Téléphone</h3>
                    <p className="text-gray-400">06 52 83 18 77</p>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg mb-2">Email</h3>
                    <p className="text-gray-400">contact@pepformation.com</p>
                </div>
            </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 text-pep-dark shadow-2xl">
            <div className="flex p-1 bg-gray-100 rounded-xl mb-8 w-fit">
                <button 
                    onClick={() => setType('B2B')} 
                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${type === 'B2B' ? 'bg-white shadow text-pep-dark' : 'text-gray-500'}`}
                >
                    Entreprise
                </button>
                <button 
                    onClick={() => setType('B2C')} 
                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${type === 'B2C' ? 'bg-white shadow text-pep-dark' : 'text-gray-500'}`}
                >
                    Particulier
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Nom</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pep-orange focus:ring-2 focus:ring-pep-orange/20 outline-none transition-all" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Prénom</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pep-orange focus:ring-2 focus:ring-pep-orange/20 outline-none transition-all" placeholder="Votre prénom" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email professionnel</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pep-orange focus:ring-2 focus:ring-pep-orange/20 outline-none transition-all" placeholder="nom@entreprise.com" />
                </div>

                {type === 'B2B' && (
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Entreprise</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pep-orange focus:ring-2 focus:ring-pep-orange/20 outline-none transition-all" placeholder="Nom de la structure" />
                    </div>
                )}

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pep-orange focus:ring-2 focus:ring-pep-orange/20 outline-none transition-all" placeholder="Quel est votre besoin en formation ?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-pep-orange text-white font-bold rounded-xl hover:bg-pep-dark transition-colors flex items-center justify-center gap-2 group">
                    Envoyer la demande
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-xs text-center text-gray-400 mt-4">
                    Vos données sont traitées conformément à notre politique de confidentialité.
                </p>
            </form>
        </div>
      </div>
    </div>
  );
};
