# 🚀 DÉMARRAGE RAPIDE - 3 ÉTAPES

## ⚠️ AVANT DE DÉPLOYER

### ÉTAPE 1 : Copier vos images
```
Copiez TOUTES les images de votre dossier assets/ original
vers SEYMR_SITE_FINAL/assets/

Sans les images, votre site ne s'affichera pas correctement !
```

**Liste des images à copier** :
- Toutes les images `.webp` de vos produits
- `hero-image-2000.webp`
- `algorithm-human-800w.webp`
- Et tous les autres fichiers images

---

## 🌐 ÉTAPE 2 : Déployer sur Netlify

### Méthode Drag & Drop (la plus simple)

1. **Allez sur** : https://app.netlify.com/drop
2. **Glissez-déposez** le dossier `SEYMR_SITE_FINAL` complet
3. **Attendez** l'upload (2-3 minutes)
4. **C'est en ligne !** ✅

Netlify vous donne une URL temporaire comme :
`https://random-name-123.netlify.app`

### Personnaliser l'URL

1. Dans Netlify, cliquez sur votre site
2. Allez dans **Site Settings** → **Domain Management**
3. Cliquez sur **Change site name**
4. Entrez `seymr-ultimate` (ou ce que vous voulez)
5. Votre site sera accessible sur : `https://seymr-ultimate.netlify.app`

---

## 📧 ÉTAPE 3 : Configurer les emails du formulaire

1. Dans Netlify, allez dans **Site Settings** → **Forms**
2. Cliquez sur **Form notifications**
3. Cliquez sur **Add notification**
4. Choisissez **Email notification**
5. Entrez votre email : `contact@seymr.art`
6. **Sauvegardez**

Maintenant, chaque fois qu'un visiteur soumet le formulaire, vous recevez un email ! 📬

---

## ✅ TESTER VOTRE SITE

### Tests à faire :
- [ ] Ouvrir la page d'accueil
- [ ] Cliquer sur un produit (ex: Fauteuil SISIT)
- [ ] Vérifier que les images s'affichent
- [ ] Tester le changement de thème (bouton en haut à droite)
- [ ] Remplir le formulaire de contact et l'envoyer
- [ ] Vérifier que vous recevez l'email
- [ ] Ouvrir le site sur mobile pour voir s'il est responsive

---

## 🎨 STRUCTURE DU SITE

```
SEYMR_SITE_FINAL/
├── index.html              ← Page d'accueil
├── cgv.html                ← Conditions générales
├── confidentialite.html    ← Politique de confidentialité
├── mentions-legales.html   ← Mentions légales
├── README.md               ← Documentation complète
├── DEMARRAGE_RAPIDE.md     ← Ce fichier
├── netlify.toml            ← Configuration Netlify
│
├── assets/
│   ├── main.css            ✅ CSS prêt
│   ├── main.js             ✅ JavaScript prêt
│   └── [IMAGES]            ⚠️ À COPIER !
│
└── produits/               ← 18 pages produits
    ├── fauteuil-sisit.html
    ├── paravent.html
    ├── tapis-nexus.html
    └── ... (15 autres)
```

---

## 🔧 PERSONNALISATION

### Modifier les informations de l'entreprise

Ouvrez ces 3 fichiers et remplacez les placeholders :
- `cgv.html`
- `confidentialite.html`
- `mentions-legales.html`

Cherchez et remplacez :
- `[Adresse complète]` → Votre vraie adresse
- `[Numéro SIRET]` → Votre SIRET
- `[Numéro TVA]` → Votre TVA
- `[Nom du directeur de publication]` → Votre nom

---

## 🆘 PROBLÈMES COURANTS

### ❌ Les images ne s'affichent pas
➜ **Solution** : Vous avez oublié de copier les images dans `assets/`

### ❌ Page 404 sur un produit
➜ **Solution** : Le fichier existe dans `produits/` mais le lien est cassé. Vérifiez `index.html`

### ❌ Le formulaire ne marche pas
➜ **Solution** : Vérifiez que vous avez déployé sur **Netlify** (pas un autre hébergeur)

### ❌ Je ne reçois pas les emails
➜ **Solution** : Configurez les notifications dans Netlify (voir ÉTAPE 3)

---

## 📞 BESOIN D'AIDE ?

Lisez le fichier `README.md` complet pour plus de détails.

**Email** : contact@seymr.art

---

## 🎉 Félicitations !

En 3 étapes simples, vous avez :
✅ Un site multi-pages professionnel
✅ 18 pages produits individuelles
✅ Un formulaire de contact fonctionnel
✅ Des pages légales complètes
✅ Un design responsive et élégant

**Prochaines étapes possibles** :
- Ajouter un nom de domaine personnalisé (`seymr.art`)
- Intégrer Stripe pour les paiements
- Ajouter Google Analytics
- Créer un blog
- Optimiser le SEO

🚀 **Votre site est prêt à conquérir le web !**
