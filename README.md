# CHS — Compagnie Hydraulique du Sénégal

Portail e-commerce CHS — Pompes Shimge, sanitaires et raccordement hydraulique.

## Structure du projet

```
chs-site/
├── src/
│   ├── App.jsx          ← Application principale React
│   └── main.jsx         ← Point d'entrée
├── public/
│   └── data.json        ← Base de données (produits, textes, config)
├── .github/
│   └── workflows/
│       └── deploy.yml   ← Déploiement automatique GitHub Pages
├── index.html
├── vite.config.js
└── package.json
```

## Fonctionnalités Admin

Connectez-vous sur `/admin` avec :
- **Identifiant** : `admin`
- **Mot de passe** : `chs2025`

### Sections disponibles :
| Section | Description |
|---------|-------------|
| 📊 Tableau de bord | Stats commandes et alertes stock |
| 📋 Commandes | Gestion et suivi des commandes |
| 📦 Produits | Ajouter / modifier / désactiver des produits |
| 🏷️ Catégories | Gérer les catégories et sous-catégories |
| ✏️ **Textes du site** | **Modifier tous les textes du site sans code** |
| 👥 Collaborateurs | Gérer les accès (admin / vendeur) |
| ⚙️ Paramètres | Infos entreprise, bannière, WhatsApp |
| 🌐 Publication | Guide de déploiement |

## Déploiement sur GitHub Pages (automatique)

### Étape 1 — Préparer le dépôt

```bash
# Initialisez git dans le dossier du projet
cd chs-site
git init
git add .
git commit -m "Initial commit CHS"

# Créez un dépôt sur github.com puis :
git remote add origin https://github.com/VOTRE_COMPTE/VOTRE_DEPOT.git
git branch -M main
git push -u origin main
```

### Étape 2 — Configurer GitHub Pages

1. Allez dans votre dépôt GitHub → **Settings** → **Pages**
2. Sous "Build and deployment", choisissez **GitHub Actions**
3. Cliquez **Save**

### Étape 3 — Adapter le base URL

Dans `vite.config.js`, modifiez la ligne `base` :
```js
base: '/NOM_DE_VOTRE_DEPOT/',
```

Exemple : si votre dépôt s'appelle `chs-senegal` → `base: '/chs-senegal/'`

### Résultat

À chaque `git push`, le site est automatiquement reconstruit et mis en ligne à :
```
https://VOTRE_COMPTE.github.io/VOTRE_DEPOT/
```

---

## Développement local

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:5173`

## Technologies

- **React 18** avec hooks (useState, useReducer, useEffect)
- **Vite** — build ultra-rapide
- **localStorage** — persistance des données côté navigateur
- **GitHub Actions** — CI/CD automatique
- **GitHub Pages** — hébergement gratuit

---

© 2025 Compagnie Hydraulique du Sénégal
