# Checklist de déploiement - EcolePay

## ✅ Pré-déploiement

- [ ] Vérifier que tous les fichiers sont présents
- [ ] Vérifier que `public/logo.png` existe
- [ ] Vérifier que tous les logos d'écoles sont dans `public/schools/`
- [ ] Tester le site en local
- [ ] Vérifier tous les liens externes
- [ ] Vérifier la responsivité sur mobile/tablette/desktop
- [ ] Tester les animations et interactions

## 📤 Upload

- [ ] Uploader tous les fichiers vers le serveur
- [ ] Vérifier la structure des dossiers
- [ ] Vérifier les permissions des fichiers (644 pour fichiers, 755 pour dossiers)

## ⚙️ Configuration serveur

- [ ] Vérifier que `.htaccess` est pris en compte (Apache)
- [ ] Configurer HTTPS/SSL
- [ ] Activer la redirection HTTPS dans `.htaccess` si SSL est configuré
- [ ] Vérifier que `robots.txt` est accessible
- [ ] Vérifier que `sitemap.xml` est accessible

## 🔍 Post-déploiement

- [ ] Tester toutes les pages :
  - [ ] `https://ecolepay.ci/` (ou votre domaine)
  - [ ] `https://ecolepay.ci/ecoles.html`
  - [ ] `https://ecolepay.ci/contact.html`
- [ ] Vérifier le chargement des images
- [ ] Tester les liens de téléchargement (Google Play, App Store)
- [ ] Tester le formulaire de contact
- [ ] Vérifier la navigation mobile
- [ ] Tester sur différents navigateurs (Chrome, Firefox, Safari, Edge)

## 🔎 SEO

- [ ] Soumettre le sitemap à Google Search Console
- [ ] Vérifier les métadonnées avec l'outil de test Open Graph
- [ ] Tester avec Google PageSpeed Insights
- [ ] Vérifier l'accessibilité (contraste, navigation clavier)

## 📱 Réseaux sociaux

- [ ] Tester le partage sur Facebook (métadonnées OG)
- [ ] Tester le partage sur Twitter (métadonnées Twitter Card)
- [ ] Vérifier l'aperçu du lien partagé

## 🔒 Sécurité

- [ ] Vérifier les headers de sécurité (X-Frame-Options, etc.)
- [ ] S'assurer que HTTPS est activé
- [ ] Vérifier qu'aucune information sensible n'est exposée

## 📊 Analytics (optionnel)

- [ ] Ajouter Google Analytics si nécessaire
- [ ] Configurer le suivi des conversions

## ✅ Finalisation

- [ ] Documenter les URLs de production
- [ ] Sauvegarder les identifiants d'accès
- [ ] Noter la date de déploiement
- [ ] Informer l'équipe du déploiement

---

**Date de déploiement** : _______________  
**URL de production** : https://ecolepay.ci  
**Déployé par** : _______________

