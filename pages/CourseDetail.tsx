import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../data';
import { CheckCircle, Calendar, Download, AlertCircle } from 'lucide-react';

export const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = COURSES.find(c => c.id === id);

  if (!course) return <div className="pt-32 text-center">Formation introuvable</div>;

  return (
    <div className="bg-white min-h-screen">
        {/* Header Hero */}
        <div className="relative h-[60vh] bg-pep-dark flex items-end pb-20 overflow-hidden">
             <img src={course.image} className="absolute inset-0 w-full h-full object-cover opacity-40" alt="" />
             <div className="absolute inset-0 bg-gradient-to-t from-pep-dark via-pep-dark/50 to-transparent"></div>
             
             <div className="container mx-auto px-6 relative z-10">
                 <Link to="/catalogue" className="text-white/60 hover:text-white mb-6 inline-flex items-center text-sm font-medium">← Retour au catalogue</Link>
                 <span className="block text-pep-orange font-bold tracking-widest uppercase mb-4">{course.category}</span>
                 <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 max-w-4xl">{course.title}</h1>
                 <div className="flex flex-wrap gap-6 text-white/80">
                    <span className="flex items-center gap-2"><Calendar size={18} /> {course.duration}</span>
                    <span className="px-3 py-1 border border-white/20 rounded-full text-sm">Finançable OPCO/CPF (sous conditions)</span>
                 </div>
             </div>
        </div>

        <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
                <section>
                    <h2 className="text-2xl font-display font-bold mb-6 text-pep-dark">Objectifs & Contexte</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">{course.description}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold mb-6 text-pep-dark">Programme de la formation</h2>
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                        <ul className="space-y-4">
                            {course.program.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="text-pep-turquoise mt-1 shrink-0" size={20} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold mb-6 text-pep-dark">Prérequis</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {course.prerequisites.map((req, i) => (
                            <li key={i}>{req}</li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Sidebar Sticky */}
            <div className="relative">
                <div className="sticky top-32 p-8 rounded-3xl border border-gray-200 shadow-xl bg-white">
                    <h3 className="text-xl font-bold mb-6">Prochaines étapes</h3>
                    
                    <div className="space-y-4">
                        <Link to="/contact" className="block w-full py-4 bg-pep-orange text-white text-center font-bold rounded-xl hover:bg-pep-dark transition-colors">
                            Demander un devis (Entreprise)
                        </Link>
                        <Link to="/sessions" className="block w-full py-4 bg-white border-2 border-pep-dark text-pep-dark text-center font-bold rounded-xl hover:bg-gray-50 transition-colors">
                            Voir les dates (Particulier)
                        </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-100">
                        <button className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-pep-orange transition-colors text-sm font-medium">
                            <Download size={16} /> Télécharger le programme PDF
                        </button>
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl flex gap-3 text-blue-800 text-xs leading-relaxed">
                        <AlertCircle size={16} className="shrink-0 mt-0.5" />
                        <p>Cette formation nécessite une tenue adaptée (chaussures de sécurité) pour la partie pratique.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};