# PEP FORMATIONS — PROTOTYPE V0 & STRATÉGIE

## B) SYNTHÈSE & HYPOTHÈSES

**Synthèse :**
- **Cible :** Mixte B2B (RH/HSE cherchant conformité & efficacité) et B2C (Individus cherchant employabilité).
- **Promesse :** "Former pour sauver des vies" — Une formation SST/CACES n'est pas une commodité administrative, c'est une compétence vitale.
- **Ton :** 5/10 Corporate/Énergique. Sérieux mais pas ennuyeux. "Pulse" (battement de cœur) comme fil conducteur visuel.
- **Différenciation :** UX fluide ("zéro blabla"), design marquants (Orange #ec520b), transparence des sessions.

**Hypothèses techniques pour le prototype :**
- Le site est une SPA (Single Page App) simulant un routing Next.js via HashRouter pour la démo statique.
- Les données (sessions, catalogue) sont mockées (statiques) mais structurées pour être remplacées par un CMS Headless (Sanity/Strapi) plus tard.
- Le design system "Impulse Grid" est implémenté via Tailwind.

---

## C) LIVRABLES V0 (EXTRAITS CLÉS)

### 1) Stratégie de Marque
**Proposition de valeur :** "L'excellence opérationnelle au service de la sécurité vitale."
**Accroches :**
1. "Ne formez pas pour la loi. Formez pour la vie."
2. "La sécurité n'est pas une option, c'est votre fondation."
3. "Réagir quand chaque seconde compte."

### 2) Direction Artistique (Territoire : "Vital Pulse")
- **Palette :**
  - Primaire : `#ec520b` (Orange Pep - Action/Alerte maîtrisée)
  - Secondaire : `#0f172a` (Deep Navy - Sérieux/Institutionnel)
  - Accent A : `#7c3aed` (Violet - Modernité/Tech)
  - Accent B : `#2dd4bf` (Turquoise - Sérénité/Santé)
- **Typographie :**
  - Titres : *Plus Jakarta Sans* (Géométrique, lisible, moderne).
  - Corps : *Inter* (Neutre, lisible).
- **UI Signature :**
  - "The Pulse Line" : Éléments graphiques filaires rappelant un ECG.
  - "Glass Cards" : Effet de profondeur pour les fiches formations.
  - Typographie XXL pour les messages clés (Inspi Marrow).

### 3) Conformité & Données
- Adresse intégrée : 61 Rue de Lyon, 75012 Paris
- SIRET : 992 057 174 00011
- Disclaimer : "Les dates et durées sont indicatives pour ce prototype."

---

## Instructions Techniques
Ce prototype utilise React 18 et Tailwind CSS.
Ouvrez le fichier `index.html` pour voir le résultat.
