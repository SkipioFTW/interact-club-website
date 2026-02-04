# 📖 Manuel d'Utilisation - Interact Club Tunis Amilcar Website

## 📋 Table des Matières
1. [Comment Ajouter un Nouvel Événement](#comment-ajouter-un-nouvel-événement)
2. [Comment Modifier les Membres du Bureau](#comment-modifier-les-membres-du-bureau)
3. [Configuration EmailJS](#configuration-emailjs)
4. [Déploiement sur Netlify](#déploiement-sur-netlify)
5. [Mise à Jour du Site](#mise-à-jour-du-site)

---

## 🎉 Comment Ajouter un Nouvel Événement

### Étape 1: Préparer les Images/Vidéos
1. Optimisez vos images (recommandé: max 500KB par image)
   - Utilisez un outil gratuit comme [TinyPNG](https://tinypng.com/)
2. Placez les images dans: `src/assets/events/`
3. Nommez vos fichiers de manière descriptive (ex: `winter-drive-2026.jpg`)

### Étape 2: Modifier le Fichier des Événements
1. Ouvrez le fichier: `src/data/events.js`
2. Copiez le template d'événement (lignes 8-20)
3. Collez-le dans la liste `events` (après le dernier événement)
4. Remplissez les informations:

```javascript
{
  id: 4, // Utilisez le prochain numéro disponible
  title: "Nom de Votre Événement",
  date: "2026-03-15", // Format: YYYY-MM-DD
  status: "current", // "current" pour en cours, "past" pour terminé
  description: "Description de l'événement et son impact.",
  media: {
    poster: "/src/assets/events/votre-image.jpg",
    images: [
      "/src/assets/events/image1.jpg",
      "/src/assets/events/image2.jpg"
    ],
    videos: [] // Optionnel: URLs YouTube
  },
  donationActive: true // true pour activer le bouton de don
}
```

### Étape 3: Sauvegarder
- Sauvegardez le fichier (`Ctrl + S`)
- Le site se mettra à jour automatiquement si le serveur dev est en cours d'exécution

### Étape 4: Déplacer un Événement vers "Passé"
Quand un événement est terminé:
1. Changez `status: "current"` en `status: "past"`
2. Changez `donationActive: true` en `donationActive: false`

---

## 👥 Comment Modifier les Membres du Bureau

### Ajouter/Modifier un Membre
1. Ouvrez: `src/data/members.js`
2. Pour ajouter un nouveau membre, copiez un bloc existant:

```javascript
{
  id: 14, // Prochain numéro
  name: "Prénom Nom",
  role: "Titre du Poste",
  image: "/src/assets/members/photo-nom.jpg",
  order: 14 // Ordre d'affichage
}
```

3. Ajoutez la photo du membre dans `src/assets/members/`
4. Sauvegardez le fichier

### Supprimer un Membre
- Supprimez simplement le bloc complet du membre

---

## 📧 Configuration EmailJS

Pour que les formulaires de contact fonctionnent:

### Étape 1: Créer un Compte EmailJS
1. Allez sur [EmailJS.com](https://www.emailjs.com/)
2. Créez un compte gratuit (jusqu'à 200 emails/mois)

### Étape 2: Configurer le Service Email
1. Dans EmailJS Dashboard → "Email Services"
2. Cliquez "Add New Service"
3. Choisissez "Gmail" (recommandé)
4. Connectez votre compte Gmail (`team.ouba@gmail.com`)
5. Notez votre **Service ID**

### Étape 3: Créer un Template
1. Dans EmailJS Dashboard → "Email Templates"
2. Cliquez "Create New Template"
3. Utilisez ce template:

**Sujet:** Nouveau message de {{name}}

**Contenu:**
```
Nom: {{name}}
Email: {{email}}
Téléphone: {{phone}}
Message: {{message}}

---
Intérêt (pour inscription): {{interest}}
```

4. Notez votre **Template ID**

### Étape 4: Obtenir la Clé Publique
1. Dans EmailJS Dashboard → "Account"
2. Copiez votre **Public Key**

### Étape 5: Mettre à Jour le Site
1. Ouvrez: `src/data/config.js`
2. Remplacez les valeurs:

```javascript
export const emailConfig = {
  serviceId: "service_xxxxxxx",     // Votre Service ID
  templateId: "template_xxxxxxx",   // Votre Template ID
  publicKey: "xxxxxxxxxxxxxxxx"     // Votre Public Key
};
```

3. Sauvegardez le fichier

---

## 🚀 Déploiement sur Netlify (GRATUIT)

### Méthode 1: Drag & Drop (Plus Simple)

#### Étape 1: Construire le Site
1. Ouvrez PowerShell dans le dossier du projet
2. Exécutez:
```powershell
npm run build
```
3. Un dossier `dist` sera créé

#### Étape 2: Déployer sur Netlify
1. Allez sur [Netlify.com](https://www.netlify.com/)
2. Créez un compte gratuit
3. Cliquez "Add new site" → "Deploy manually"
4. Glissez-déposez le dossier `dist` dans la zone
5. Attendez quelques secondes
6. Votre site est en ligne! 🎉

#### Étape 3: Personnaliser le Domaine (Optionnel)
1. Dans Netlify → "Site settings" → "Domain management"
2. Cliquez "Options" → "Edit site name"
3. Changez en: `interact-club-tunis-amilcar`
4. Votre URL sera: `interact-club-tunis-amilcar.netlify.app`

### Méthode 2: Via GitHub (Recommandé pour les Mises à Jour Fréquentes)

Cette méthode permet des mises à jour automatiques: chaque fois que vous modifiez le code, le site se redéploie automatiquement!

#### Étape 1: Installer Git (Si ce n'est pas déjà fait)

**Vérifier si Git est installé:**
1. Ouvrez PowerShell
2. Tapez: `git --version`
3. Si vous voyez un numéro de version, Git est installé ✅
4. Sinon, téléchargez-le sur [git-scm.com](https://git-scm.com/download/win)

**Configuration initiale de Git:**
```powershell
git config --global user.name "Votre Nom"
git config --global user.email "team.ouba@gmail.com"
```

#### Étape 2: Créer un Compte et un Dépôt GitHub

1. **Créer un compte:**
   - Allez sur [GitHub.com](https://github.com/)
   - Cliquez "Sign up"
   - Utilisez l'email `team.ouba@gmail.com`
   - Choisissez un nom d'utilisateur (ex: `interact-club-amilcar`)

2. **Créer un nouveau repository:**
   - Cliquez le bouton "+" en haut à droite → "New repository"
   - **Repository name:** `interact-club-website`
   - **Description:** "Site web officiel de l'Interact Club Tunis Amilcar"
   - Choisissez **Public** (gratuit) ou **Private** (si vous avez un compte payant)
   - ❌ **NE COCHEZ PAS** "Add a README file"
   - Cliquez "Create repository"

3. **Notez l'URL du repository:**
   - Vous verrez une URL comme: `https://github.com/votre-nom/interact-club-website.git`
   - Gardez cette page ouverte!

#### Étape 3: Pousser Votre Code vers GitHub

**Ouvrez PowerShell dans le dossier du projet** (`c:\Users\SBS\OneDrive\Bureau\amilcar`)

**Commandes à exécuter une par une:**

```powershell
# 1. Initialiser Git dans votre projet
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Créer votre premier commit
git commit -m "Premier commit: site web Interact Club"

# 4. Renommer la branche en 'main' (standard GitHub)
git branch -M main

# 5. Connecter votre projet à GitHub
# Remplacez l'URL par celle de VOTRE repository
git remote add origin https://github.com/VOTRE-NOM/interact-club-website.git

# 6. Pousser le code vers GitHub
git push -u origin main
```

**Si on vous demande de vous connecter:**
- Entrez votre nom d'utilisateur GitHub
- Pour le mot de passe, utilisez un **Personal Access Token** (pas votre mot de passe normal)

**Créer un Personal Access Token:**
1. Sur GitHub → Cliquez votre photo de profil → "Settings"
2. Tout en bas à gauche → "Developer settings"
3. "Personal access tokens" → "Tokens (classic)"
4. "Generate new token" → "Generate new token (classic)"
5. Nom: "Netlify Deploy"
6. Cochez: `repo` (tous les sous-items)
7. Cliquez "Generate token"
8. **COPIEZ LE TOKEN** (vous ne le reverrez plus!)
9. Utilisez ce token comme mot de passe dans PowerShell

#### Étape 4: Connecter GitHub à Netlify

1. **Sur Netlify:**
   - Allez sur [Netlify.com](https://www.netlify.com/)
   - Connectez-vous (ou créez un compte)
   - Cliquez "Add new site" → "Import an existing project"

2. **Choisir GitHub:**
   - Cliquez "Deploy with GitHub"
   - Autorisez Netlify à accéder à votre compte GitHub
   - Sélectionnez votre repository: `interact-club-website`

3. **Configuration du Build:**
   - **Branch to deploy:** `main`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Cliquez "Deploy site"

4. **Attendez le déploiement:**
   - Le premier déploiement prend 1-2 minutes
   - Vous verrez "Site is live" quand c'est prêt! 🎉

#### Étape 5: Personnaliser le Domaine (Optionnel)

1. Dans Netlify → "Site settings" → "Domain management"
2. Cliquez "Options" → "Edit site name"
3. Changez en: `interact-club-tunis-amilcar`
4. Votre URL sera: `https://interact-club-tunis-amilcar.netlify.app`

#### ✨ Avantages de cette Méthode:

- ✅ **Déploiement automatique**: Chaque modification sur GitHub redéploie le site
- ✅ **Historique complet**: Vous pouvez revenir à n'importe quelle version
- ✅ **Collaboration facile**: Plusieurs personnes peuvent travailler sur le site
- ✅ **Sauvegarde cloud**: Votre code est sauvegardé sur GitHub

---

## 🔄 Mise à Jour du Site

### Si vous utilisez Drag & Drop:
1. Modifiez les fichiers localement
2. Exécutez `npm run build`
3. Dans Netlify → "Deploys" → Glissez le nouveau dossier `dist`

### Si vous utilisez GitHub (Workflow Complet):

#### Scénario: Ajouter un Nouvel Événement

**1. Modifiez les fichiers localement:**
   - Ajoutez les images dans `src/assets/events/`
   - Modifiez `src/data/events.js`
   - Sauvegardez tous les fichiers

**2. Vérifiez vos modifications en local:**
```powershell
# Si le serveur dev n'est pas en cours, démarrez-le:
npm run dev
# Ouvrez http://localhost:5173 pour vérifier
```

**3. Poussez vers GitHub:**
```powershell
# Voir quels fichiers ont changé
git status

# Ajouter tous les fichiers modifiés
git add .

# Ou ajouter des fichiers spécifiques:
git add src/data/events.js
git add src/assets/events/nouveau-event.jpg

# Créer un commit avec un message descriptif
git commit -m "Ajout événement: Collecte de vêtements d'hiver 2026"

# Pousser vers GitHub
git push
```

**4. Vérifiez le déploiement:**
   - Allez sur Netlify
   - Vous verrez "Building" puis "Published" (1-2 minutes)
   - Votre site est automatiquement mis à jour! 🎉

#### Commandes Git Utiles:

```powershell
# Voir l'historique des commits
git log --oneline

# Voir les différences avant de commiter
git diff

# Annuler des modifications non commitées
git checkout -- nom-du-fichier.js

# Voir le statut du repository
git status

# Mettre à jour votre code local (si quelqu'un d'autre a fait des changements)
git pull
```

#### Workflow Quotidien Recommandé:

1. **Avant de commencer à travailler:**
   ```powershell
   git pull  # Récupérer les dernières modifications
   ```

2. **Après avoir fait des modifications:**
   ```powershell
   git add .
   git commit -m "Description claire de ce que vous avez fait"
   git push
   ```

3. **Netlify déploie automatiquement!**

---

## 🔒 Sécurité

### Points Importants:
- ✅ Les clés EmailJS **publiques** peuvent être dans le code (c'est normal)
- ✅ Netlify utilise HTTPS automatiquement
- ✅ Les formulaires sont protégés contre le spam par EmailJS
- ❌ Ne partagez JAMAIS vos identifiants Gmail

### Vérification de Sécurité:
```powershell
npm audit
```
Si des vulnérabilités apparaissent:
```powershell
npm audit fix
```

---

## 📞 Besoin d'Aide?

### Problèmes Courants:

**Les formulaires ne fonctionnent pas:**
- Vérifiez que EmailJS est configuré correctement
- Vérifiez la console du navigateur (F12) pour les erreurs

**Les images ne s'affichent pas:**
- Vérifiez que les chemins sont corrects
- Assurez-vous que les images sont dans `src/assets/`

**Le site ne se met pas à jour:**
- Videz le cache du navigateur (Ctrl + Shift + R)
- Reconstruisez avec `npm run build`

---

## 🎨 Personnalisation Avancée

### Changer les Couleurs:
Ouvrez `src/index.css` et modifiez les variables CSS (lignes 12-18):
```css
--color-primary: #1A4D8F;        /* Bleu principal */
--color-accent: #D4AF37;         /* Or */
```

### Ajouter une Nouvelle Section:
1. Créez un nouveau fichier dans `src/sections/`
2. Importez-le dans `src/App.jsx`
3. Ajoutez-le entre les autres sections

---

**Bonne chance avec votre site! 🌟**
