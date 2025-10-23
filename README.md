# 🎨 SEYMR® - Site Multi-pages
## Guide d'installation et de déploiement

---

## 📁 Structure du Site

```
SEYMR_SITE_FINAL/
├── index.html                      # Page d'accueil
├── cgv.html                        # Conditions Générales de Vente
├── confidentialite.html            # Politique de Confidentialité
├── mentions-legales.html           # Mentions Légales
│
├── assets/
│   ├── main.css                    # Styles complets
│   ├── main.js                     # Scripts JavaScript
│   └── [VOS IMAGES]                # À copier depuis votre dossier assets/
│
└── produits/
    ├── fauteuil-sisit.html
    ├── paravent.html
    ├── tapis-nexus.html
    ├── repose-pieds.html
    ├── pouf-cosmosis.html
    ├── tirage-art.html
    ├── sac-conqueror.html
    ├── porte-documents.html
    └── [+ 10 autres pages produits]
```

---

## 🚀 ÉTAPE 1 : Copier les Images

**IMPORTANT** : Le dossier `assets/` contient déjà les fichiers CSS et JS, mais **il manque les images**.

### Action à faire :
1. Ouvrez votre dossier `assets/` original (celui avec toutes vos images `.webp`)
2. Copiez **TOUTES** les images
3. Collez-les dans `SEYMR_SITE_FINAL/assets/`

**Liste des images à copier** :
- `algorithm-human-800w.webp`
- `casquette-1-studio.webp`, `casquette-2-studio.webp`, etc.
- `fauteuil-sisit-1.webp`, `fauteuil-sisit-2.webp`, etc.
- `hero-image-2000.webp`
- `paravent-1-ambiance.webp`, `paravent-2-studio.webp`, etc.
- `porte-documents-1-ambiance.webp`, etc.
- `pouf-cosmosis-1-ambiance.webp`, etc.
- `repose-pieds-satellite-1-studio.webp`, etc.
- `sac-conqueror-1-studio.webp`, etc.
- `tapis-nexus-1-ambiance.webp`, etc.
- `tirage-dart-1-ambiance.webp`, etc.
- Et toutes les autres !

---

## 🌐 ÉTAPE 2 : Déployer sur Netlify

### Option A : Glisser-Déposer (Méthode Rapide)

1. **Allez sur [Netlify Drop](https://app.netlify.com/drop)**
2. **Glissez-déposez** le dossier `SEYMR_SITE_FINAL` complet
3. **Attendez** que Netlify termine l'upload
4. **Votre site est en ligne !** Netlify vous donne une URL temporaire
5. **Personnalisez l'URL** : 
   - Allez dans Site Settings → Domain Management
   - Changez le sous-domaine (ex: `seymr-ultimate.netlify.app`)

### Option B : Via GitHub + Netlify (Méthode Professionnelle)

1. **Créez un dépôt GitHub** :
   ```bash
   cd SEYMR_SITE_FINAL
   git init
   git add .
   git commit -m "Initial commit - SEYMR Site Multi-pages"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/seymr-site.git
   git push -u origin main
   ```

2. **Connectez à Netlify** :
   - Allez sur [Netlify](https://app.netlify.com)
   - Cliquez sur "New site from Git"
   - Sélectionnez votre dépôt GitHub
   - Configuration :
     - Build command: (laisser vide)
     - Publish directory: `/` (racine)
   - Cliquez sur "Deploy"

3. **Configuration du formulaire Netlify** :
   - Le formulaire est déjà configuré avec `data-netlify="true"`
   - Allez dans Site Settings → Forms pour voir les soumissions
   - Configurez les notifications email si besoin

---

## 🎨 ÉTAPE 3 : Personnalisation (Optionnel)

### Modifier les informations légales

Les fichiers `cgv.html`, `confidentialite.html` et `mentions-legales.html` contiennent des placeholders comme `[Adresse complète]`, `[Numéro SIRET]`, etc.

**Remplacez ces placeholders** par vos vraies informations :
- Adresse du siège social
- Numéro SIRET
- Numéro TVA Intracommunautaire
- Nom du directeur de publication
- Numéro de dépôt INPI (marque)

### Personnaliser les métadonnées SEO

Dans chaque fichier HTML, vous pouvez modifier :
- `<title>` : Le titre de la page
- `<meta name="description">` : La description pour Google
- `<meta property="og:...">` : Les aperçus pour réseaux sociaux

---

## 📧 ÉTAPE 4 : Configuration du Formulaire de Contact

### Comment fonctionne le formulaire ?

Le formulaire utilise **Netlify Forms** (gratuit) :
- Lorsqu'un visiteur envoie le formulaire, Netlify capture automatiquement les données
- Vous recevez une notification par email
- Les soumissions sont visibles dans le dashboard Netlify

### Configuration des notifications email

1. Allez sur Netlify : **Site Settings → Forms → Form notifications**
2. Cliquez sur "Add notification"
3. Choisissez "Email notification"
4. Entrez votre email : `contact@seymr.art`
5. Sauvegardez

### Activer l'anti-spam (Honeypot)

Le formulaire inclut déjà un champ honeypot caché pour bloquer les bots spam. C'est automatique !

---

## 🔒 ÉTAPE 5 : Ajouter un Nom de Domaine Personnalisé

### Si vous avez `seymr.art` :

1. **Dans Netlify** :
   - Site Settings → Domain Management
   - Cliquez sur "Add custom domain"
   - Entrez `seymr.art`
   - Netlify vous donne les DNS à configurer

2. **Chez votre registrar** (ex: OVH, Gandi, Namecheap) :
   - Ajoutez un enregistrement `A` pointant vers l'IP de Netlify
   - Ou configurez les nameservers Netlify

3. **SSL automatique** :
   - Netlify active automatiquement le HTTPS (Let's Encrypt)
   - Attendez quelques minutes pour la propagation

---

## ✅ Checklist de Vérification Post-Déploiement

### Tests fonctionnels
- [ ] Page d'accueil s'affiche correctement
- [ ] Toutes les images se chargent
- [ ] Navigation fonctionne (menu, liens)
- [ ] Changement de thème clair/sombre fonctionne
- [ ] Toutes les pages produits sont accessibles
- [ ] Pages légales (CGV, Confidentialité, Mentions) s'affichent
- [ ] Formulaire de contact se soumet correctement
- [ ] Reçu un email de test du formulaire
- [ ] Galeries d'images fonctionnent (modales)
- [ ] Site responsive (mobile, tablette, desktop)

### Optimisations SEO
- [ ] Tester avec [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Score > 90 sur Performance
- [ ] Vérifier les balises meta (titre, description)
- [ ] Soumettre le sitemap à Google Search Console

### Sécurité
- [ ] HTTPS activé (cadenas vert dans navigateur)
- [ ] Tester les headers avec [Security Headers](https://securityheaders.com/)

---

## 🆘 Dépannage

### Les images ne s'affichent pas
➜ Vérifiez que vous avez bien copié toutes les images dans `assets/`

### Le formulaire ne fonctionne pas
➜ Vérifiez que l'attribut `data-netlify="true"` est présent dans la balise `<form>`

### Erreur 404 sur une page produit
➜ Vérifiez que le fichier existe bien dans le dossier `produits/`

### Les liens du footer ne fonctionnent pas
➜ Les liens pointent vers `cgv.html`, `confidentialite.html`, `mentions-legales.html`
➜ Vérifiez que ces fichiers existent à la racine

---

## 🎯 Prochaines Étapes (Optionnelles)

### Améliorer le SEO
- Créer un fichier `sitemap.xml`
- Ajouter un fichier `robots.txt`
- Optimiser les images (compression, lazy loading)

### Ajouter un blog
- Créer un dossier `blog/` avec des articles
- Utiliser un CMS headless (Sanity, Contentful)

### Intégrer le paiement
- Créer un compte Stripe
- Configurer les produits dans Stripe Dashboard
- Ajouter les boutons "Acheter" avec Stripe Checkout

### Analytics
- Google Analytics 4
- Hotjar pour les heatmaps
- Plausible (alternative respectueuse de la vie privée)

---

## 📞 Support

Si vous avez des questions :
- Email : contact@seymr.art
- [Documentation Netlify](https://docs.netlify.com/)
- [Documentation Stripe](https://stripe.com/docs)

---

## 🎉 Félicitations !

Votre site SEYMR® multi-pages est prêt ! 🚀

**Prochaine conversation** : Nous pourrons ajouter un backend API, un système de paiement Stripe, et bien plus encore.
