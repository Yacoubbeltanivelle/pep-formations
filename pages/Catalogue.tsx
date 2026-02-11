import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data';
import { Category } from '../types';
import { Clock, Tag, ArrowUpRight } from 'lucide-react';

const categories: Category[] = ['SST', 'CACES', 'Incendie', 'Habilitation', 'Gestes'];

export const Catalogue: React.FC = () => {
  const [activeCat, setActiveCat] = useState<Category | 'All'>('All');

  const filteredCourses = activeCat === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCat);

  return (
    <div className="min-h-screen bg-pep-light pt-40 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
                <span className="text-pep-orange font-bold uppercase tracking-widest text-sm mb-4 block">Catalogue 2026</span>
                <h1 className="font-display font-extrabold text-6xl md:text-7xl text-pep-dark tracking-tighter">
                    NOS <br/> EXPERTISES.
                </h1>
            </div>
            <p className="text-xl text-gray-500 max-w-md leading-relaxed">
                Des programmes certifiants, pragmatiques et conçus pour l'efficacité opérationnelle immédiate.
            </p>
        </div>

        {/* Filters */}
        <div className="sticky top-24 z-30 py-4 mb-12 bg-pep-light/80 backdrop-blur-md -mx-6 px-6">
            <div className="flex flex-wrap gap-3">
            <button 
                onClick={() => setActiveCat('All')}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all border ${
                    activeCat === 'All' 
                    ? 'bg-pep-dark text-white border-pep-dark' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-pep-dark hover:text-pep-dark'
                }`}
            >
                Tout voir
            </button>
            {categories.map(cat => (
                <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all border ${
                    activeCat === cat 
                    ? 'bg-pep-dark text-white border-pep-dark' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-pep-dark hover:text-pep-dark'
                }`}
                >
                {cat}
                </button>
            ))}
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <Link 
                to={`/formations/${course.id}`} 
                key={course.id} 
                className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                style={{ animation: `fadeInUp 0.6s ease-out forwards ${idx * 0.1}s`, opacity: 0 }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-xs font-extrabold uppercase tracking-widest rounded-lg text-pep-dark shadow-sm">
                        {course.category}
                    </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-pep-orange text-sm font-bold bg-pep-orange/5 px-3 py-1 rounded-full">
                        <Clock size={14} />
                        <span>{course.duration}</span>
                    </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-pep-dark mb-4 leading-tight group-hover:text-pep-violet transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-500 mb-8 line-clamp-3 text-sm leading-relaxed flex-1">
                    {course.description}
                </p>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex gap-2">
                        {course.tags.slice(0, 1).map(tag => (
                            <span key={tag} className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-pep-dark text-white flex items-center justify-center group-hover:bg-pep-orange transition-colors duration-300">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};