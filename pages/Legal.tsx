import React from 'react';

export const LegalMentions = () => (
  <div className="min-h-screen bg-pep-light pt-32 pb-20">
    <div className="container mx-auto px-6 max-w-3xl">
      <h1 className="font-display font-bold text-4xl mb-8 text-pep-dark">Mentions Légales</h1>
      <div className="bg-white p-8 rounded-3xl shadow-sm space-y-6 text-gray-600">
        <section>
          <h2 className="font-bold text-xl text-pep-dark mb-2">1. Éditeur du site</h2>
          <p>Le site Pep Formations est édité par la société Pep Formations, SAS au capital de 1000€.</p>
          <p><strong>Siège social :</strong> 61 Rue de Lyon, 75012 Paris</p>
          <p><strong>SIRET :</strong> 992 057 174 00011</p>
          <p><strong>Email :</strong> contact@pepformation.com</p>
          <p><strong>Téléphone :</strong> 06 52 83 18 77</p>
        </section>
        <section>
          <h2 className="font-bold text-xl text-pep-dark mb-2">2. Hébergement</h2>
          <p>Ce site est hébergé sur GitHub Pages / Vercel (Prototype).</p>
        </section>
        <section>
          <h2 className="font-bold text-xl text-pep-dark mb-2">3. Propriété intellectuelle</h2>
          <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
        </section>
      </div>
    </div>
  </div>
);

export const Privacy = () => (
  <div className="min-h-screen bg-pep-light pt-32 pb-20">
    <div className="container mx-auto px-6 max-w-3xl">
      <h1 className="font-display font-bold text-4xl mb-8 text-pep-dark">Politique de Confidentialité</h1>
      <div className="bg-white p-8 rounded-3xl shadow-sm space-y-6 text-gray-600">
        <p>Pep Formations s'engage à ce que la collecte et le traitement de vos données soient conformes au règlement général sur la protection des données (RGPD).</p>
        <section>
            <h2 className="font-bold text-xl text-pep-dark mb-2">1. Données collectées</h2>
            <p>Nous collectons les données transmises via le formulaire de contact (nom, prénom, email, entreprise) uniquement dans le but de répondre à votre demande commerciale.</p>
        </section>
        <section>
            <h2 className="font-bold text-xl text-pep-dark mb-2">2. Durée de conservation</h2>
            <p>Vos données sont conservées pendant une durée de 3 ans maximum à compter de notre dernier contact.</p>
        </section>
        <section>
            <h2 className="font-bold text-xl text-pep-dark mb-2">3. Cookies</h2>
            <p>Ce site utilise un stockage local pour le bon fonctionnement de la navigation (préférences). Aucun cookie publicitaire tiers n'est utilisé.</p>
        </section>
      </div>
    </div>
  </div>
);

export const CGV = () => (
    <div className="min-h-screen bg-pep-light pt-32 pb-20">
    <div className="container mx-auto px-6 max-w-3xl">
      <h1 className="font-display font-bold text-4xl mb-8 text-pep-dark">Conditions Générales de Vente</h1>
      <div className="bg-white p-8 rounded-3xl shadow-sm space-y-6 text-gray-600">
        <p className="italic text-sm">Version applicable au 01/01/2026</p>
        <section>
            <h2 className="font-bold text-xl text-pep-dark mb-2">1. Objet</h2>
            <p>Les présentes CGV définissent les relations contractuelles entre Pep Formations et son client (entreprise ou particulier).</p>
        </section>
        <section>
            <h2 className="font-bold text-xl text-pep-dark mb-2">2. Inscription</h2>
            <p>Toute commande de formation suppose l'acceptation sans réserve des présentes conditions générales. L'inscription est validée à réception du devis signé ou du règlement.</p>
        </section>
        <section>
            <h2 className="font-bold text-xl text-pep-dark mb-2">3. Tarifs</h2>
            <p>Les prix sont indiqués en euros hors taxes. Ils sont majorés de la TVA au taux en vigueur. Pep Formations se réserve le droit de modifier ses prix à tout moment, mais le produit sera facturé sur la base du tarif en vigueur au moment de la validation de la commande.</p>
        </section>
         <section>
            <h2 className="font-bold text-xl text-pep-dark mb-2">4. Annulation</h2>
            <p>Toute annulation intervenant moins de 10 jours ouvrés avant le début de la formation entraînera la facturation de 50% du montant total.</p>
        </section>
      </div>
    </div>
  </div>
);