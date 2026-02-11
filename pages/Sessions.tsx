import React, { useState } from 'react';
import { SESSIONS, COURSES } from '../data';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, Users } from 'lucide-react';

export const Sessions: React.FC = () => {
  // Mock Calendar logic (static for V0)
  const [currentMonth, setCurrentMonth] = useState('Novembre 2023');

  // Enhance session data with course titles
  const fullSessions = SESSIONS.map(s => {
    const course = COURSES.find(c => c.id === s.courseId);
    return { ...s, courseTitle: course?.title, category: course?.category };
  });

  return (
    <div className="min-h-screen bg-pep-light pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <h1 className="font-display font-bold text-5xl text-pep-dark mb-4">Calendrier</h1>
                <p className="text-gray-500">Visualisez les prochaines sessions inter-entreprises.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-white p-2 rounded-full shadow-sm">
                <button className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeft /></button>
                <span className="font-bold w-32 text-center">{currentMonth}</span>
                <button className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight /></button>
            </div>
        </div>

        {/* Calendar Grid (Visual Mock) */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-gray-100">
            <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50">
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
                    <div key={day} className="py-4 text-center text-sm font-bold text-gray-400 uppercase tracking-wider">{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 h-[500px]">
                {/* Generating empty cells and populated cells for the mock visual */}
                {Array.from({ length: 30 }).map((_, i) => {
                    const day = i + 1;
                    // Mocking some sessions on specific days
                    const daySessions = fullSessions.filter(s => new Date(s.date).getDate() === day);
                    
                    return (
                        <div key={i} className="border-r border-b border-gray-100 p-2 min-h-[100px] hover:bg-gray-50 transition-colors relative group">
                            <span className="text-sm font-medium text-gray-400 p-1 block">{day}</span>
                            <div className="flex flex-col gap-1 mt-1">
                                {daySessions.map(s => (
                                    <div key={s.id} className="text-[10px] bg-pep-orange/10 text-pep-orange px-2 py-1 rounded truncate border-l-2 border-pep-orange">
                                        {s.category}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* List View */}
        <div className="space-y-4 max-w-4xl mx-auto">
            <h3 className="font-display font-bold text-2xl mb-6">Liste des prochaines sessions</h3>
            {fullSessions.map(session => (
                <div key={session.id} className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between hover:shadow-lg transition-shadow gap-4">
                    <div className="flex items-center gap-6 w-full md:w-auto">
                        <div className="text-center px-4 py-2 bg-pep-dark text-white rounded-xl">
                            <span className="block text-xl font-bold">{new Date(session.date).getDate()}</span>
                            <span className="text-xs uppercase">Nov</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-pep-dark">{session.courseTitle}</h4>
                            <div className="flex gap-4 text-sm text-gray-500 mt-1">
                                <span className="flex items-center gap-1"><MapPin size={14}/> {session.location}</span>
                                <span className="flex items-center gap-1"><Users size={14}/> {session.seatsTotal - session.seatsTaken} places restantes</span>
                            </div>
                        </div>
                    </div>
                    <Link to="/contact" className="w-full md:w-auto px-6 py-3 bg-white border-2 border-pep-orange text-pep-orange font-bold rounded-lg hover:bg-pep-orange hover:text-white transition-colors text-center">
                        Réserver
                    </Link>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
