import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Catalogue } from './pages/Catalogue';
import { CourseDetail } from './pages/CourseDetail';
import { Sessions } from './pages/Sessions';
import { Contact } from './pages/Contact';
import { Agency } from './pages/Agency';
import { LegalMentions, Privacy, CGV } from './pages/Legal';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NotFound = () => (
  <div className="min-h-screen bg-pep-light flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-9xl font-display font-bold text-pep-orange mb-4">404</h1>
    <h2 className="text-3xl font-bold text-pep-dark mb-6">Page introuvable</h2>
    <p className="text-gray-500 max-w-md mb-8">
      Désolé, la page que vous recherchez semble avoir été déplacée ou n'existe pas.
    </p>
    <Link to="/" className="px-8 py-4 bg-pep-dark text-white rounded-full font-bold hover:bg-pep-orange transition-colors">
      Retour à l'accueil
    </Link>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/formations/:id" element={<CourseDetail />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/agency" element={<Agency />} />
            <Route path="/legal/mentions" element={<LegalMentions />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/cgv" element={<CGV />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;