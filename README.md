## EcolePay – Site vitrine

Site vitrine statique pour l'application mobile **EcolePay**, une solution de paiement des frais scolaires en Côte d'Ivoire.

### 📁 Structure du projet

```
ecolepay-site/
├── index.html          # Page d'accueil
├── ecoles.html         # Liste des écoles partenaires
├── contact.html        # Formulaire de contact
├── assets/
│   ├── css/
│   │   └── styles.css  # Styles globaux
│   └── js/
│       └── main.js     # Scripts JavaScript
├── public/
│   ├── logo.png        # Logo EcolePay
│   └── schools/        # Logos des écoles partenaires
├── .htaccess          # Configuration Apache
├── robots.txt         # Configuration robots
└── sitemap.xml        # Sitemap pour SEO
```

### 🚀 Déploiement

#### Prérequis
- Serveur web (Apache, Nginx, ou hébergement statique)
- Domaine configuré (ex: ecolepay.ci)

#### Étapes de déploiement

1. **Upload des fichiers**
   - Transférer tous les fichiers vers le répertoire racine du serveur web
   - S'assurer que la structure de dossiers est préservée

2. **Configuration Apache** (si applicable)
   - Le fichier `.htaccess` est déjà configuré pour :
     - Compression GZIP
     - Mise en cache des assets
     - Headers de sécurité
     - Redirection HTTPS (à activer si SSL est configuré)

3. **Configuration HTTPS** (recommandé)
   - Obtenir un certificat SSL (Let's Encrypt gratuit)
   - Décommenter les lignes HTTPS dans `.htaccess` :
     ```apache
     RewriteCond %{HTTPS} off
     RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
     ```

4. **Vérifications post-déploiement**
   - ✅ Toutes les pages sont accessibles
   - ✅ Les images se chargent correctement
   - ✅ Les liens externes fonctionnent
   - ✅ Le site est responsive sur mobile
   - ✅ Les animations fonctionnent
   - ✅ Le formulaire de contact affiche le message de confirmation

5. **SEO**
   - Soumettre le sitemap à Google Search Console
   - Vérifier que `robots.txt` est accessible
   - Tester les métadonnées Open Graph

### 🧪 Test en local

```bash
# Option 1: Serveur Python
python3 -m http.server 8000

# Option 2: Serveur Node.js
npx serve .

# Option 3: PHP
php -S localhost:8000
```

Puis ouvrir `http://localhost:8000` dans le navigateur.

### 📝 Notes importantes

- **Logo** : Le logo doit être présent dans `public/logo.png`
- **Liens externes** : 
  - Google Play : https://play.google.com/store/apps/details?id=com.lkmdigital.ecolepay
  - App Store : https://apps.apple.com/ci/app/ecolepay-ci/id6743403221
  - OneLink : https://onelink.to/p9g4zm
- **Contact** : Le formulaire de contact est en mode démo (pas de backend)
- **Images** : Les logos des écoles sont dans `public/schools/`

### 🔧 Technologies utilisées

- HTML5
- CSS3 (animations, flexbox, grid)
- JavaScript (vanilla, pas de framework)
- Fonts Google (Inter, Poppins)

### 📞 Support

Développé par [LKMDIGITAL](https://lkmdigital.ci)

---

**Version** : 1.0.0  
**Dernière mise à jour** : Janvier 2025


