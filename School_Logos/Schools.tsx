import { useState } from 'react';
import { motion } from 'framer-motion';
import { School } from '../types';

const Schools = () => {
  const [filter, setFilter] = useState('all');
  
  const schools: School[] = [
    {
      name: 'MERMOZ',
      location: 'COCODY',
      type: 'Français',
      students: +2400,
      contact: '27 22 44 26 27',
      logo: '/images/School_Logos/mermoz.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'Familles MAKORE et ETIMOE',
      location: 'Riviera Abatta',
      type: 'Ivoirien',
      students: 1294,
      contact: '0101458803',
      logo: '/images/School_Logos/ECOLE DES FAMILLES.png',
      description: 'École familiale proposant un enseignement de qualité aux élèves de tous niveaux.',
      color: '#4fb3bf'
    },

    {
      name: 'LA PEPINIERE',
      location: '2 Plateaux',
      type: 'Ivoirien',
      students: 1070,
      contact: '0777882876',
      logo: '/images/School_Logos/LA PEPINIERE.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'SAINTE FAMILLE',
      location: 'Riviera 2',
      type: 'Ivoirien',
      students: 700,
      contact: '22470541',
      logo: '/images/School_Logos/SAINT FAMILLE.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'MORNING GLORY',
      location: 'Bingerville',
      type: 'ivoirien',
      students: 647,
      contact: '27 22 44 26 27',
      logo: '/images/School_Logos/morning glory.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'COCCINELLE',
      location: 'Bingerville',
      type: 'Montessori',
      students: 948,
      contact: '0748720148',
      logo: '/images/School_Logos/coccinelle.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'ANDRE MALRAUX (primaire)',
      location: 'Riviera 2',
      type: 'Ivoirien',
      students: 80,
      contact: '2722431268',
      logo: '/images/School_Logos/ANDRE MALRAUX.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'E PETIT ROYAUME',
      location: ' Riviera 3',
      type: 'Ivoirien',
      students: 245,
      contact: '0767666927 ',
      logo: '/images/School_Logos/PTIT ROYAUME.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'ARC EN CIEL',
      location: 'Yopougon',
      type: 'Ivoirien',
      students: 656,
      contact: '0778793938',
      logo: '/images/School_Logos/ARC EN CIEL.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'ARTHUR VERDIER',
      location: 'Yopougon',
      type: 'Ivoirien',
      students: 1303,
      contact: '0758686582',
      logo: '/images/School_Logos/ARTHUR VERDIER.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'ENTR\'AIDE EDUCATION',
      location: 'Bingerville',
      type: 'Ivoirien',
      students: 150,
      contact: '0778079701',
      logo: '/images/School_Logos/entraide education.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
  
    {
      name: 'GS ELEPHANT',
      location: 'YOPOUGON',
      type: 'Français',
      students: 925 ,
      contact: '0141876740',
      logo: 'public/images/School_Logos/ELEPHANT.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'MASKADI',
      location: 'Bingerville',
      type: 'Ivoirien',
      students:61,
      contact: '0704729711',
      logo: 'public/images/School_Logos/MASKADI.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'FAMA ET FATYMA 2',
      location: 'Yopougon',
      type: 'Ivoirien',
      students: +1300,
      contact: '0709114737',
      logo: 'public/images/School_Logos/GSFA.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'LA COMPTINE DES TOUT-PETITS',
      location: 'Cocody Angré',
      type: 'Ivoirien',
      students: 120,
      contact: '0767601257',
      logo: 'public/images/School_Logos/comptine.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'NOTRE DAME',
      location: '2 Plateaux',
      type: 'Ivoirien',
      students: 485,
      contact: '2722429199',
      logo: 'public/images/School_Logos/notre_dame.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'LE PETIT SEMINAIRE',
      location: 'Bingerville',
      type: 'Ivoirien',
      students: 700,
      contact: '0102042705',
      logo: 'public/images/School_Logos/le_petit_seminaire.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'ALBERT LEY',
      location: 'Riviera Faya',
      type: 'Ivoirien',
      students: 266,
      contact: '0759510150',
      logo: 'public/images/School_Logos/albert ley.jpeg',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'FONTAINE BLANCHE',
      location: 'Angré',
      type: 'Ivoirien',
      students: 36,
      contact: '0709797777',
      logo: 'public/images/School_Logos/fontaine_blanche.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
      name: 'LE ROYAUME DES ENFANTS',
      location: 'Angré château',
      type: 'Ivoirien',
      students: 306,
      contact: '0708459484',
      logo: 'public/images/School_Logos/PTIT ROYAUME.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
    },
    {
    name: 'SOURCE DE VIE',
    location: 'Yopougon',
    type: 'FIvoirien',
    students: +1900,
    contact: '0709774326',
    logo: 'public/images/School_Logos/source_de_vie.png',
    description: 'Établissement d\'excellence suivant le cursus éducatif français.',
    color: '#ffa000'
    },
    {
    name: 'IBSA',
    location: 'Abidjan',
    type: 'Britanique',
    students: +2400,
    contact: '27 22 44 26 27',
    logo: '/images/School_Logos/ibsa.png',
    description: 'Établissement d\'excellence suivant le cursus éducatif français.',
    color: '#ffa000'
    },
    {
      name: 'ENKO EDUCATION',
      location: 'Abidjan',
      type: 'Pan-Africain',
      students: +2400,
      contact: '27 22 44 26 27',
      logo: 'public/images/School_Logos/2013-enko-creation.png',
      description: 'Établissement d\'excellence suivant le cursus éducatif français.',
      color: '#ffa000'
      },
      {
        name: 'LEONARD DE VINCI',
        location: 'Abidjan',
        type: 'Français/Ivoirien',
        students: +2400,
        contact: '27 22 44 26 27',
        logo: 'public/images/School_Logos/leonard_de_vinci.png',
        description: 'Établissement d\'excellence suivant le cursus éducatif français.',
        color: '#ffa000'
      },
      {
        name: 'NOTRE DAME DU PLATEAU',
        location: 'Abidjan',
        type: 'Ivoirien',
        students: +2400,
        contact: '27 22 44 26 27',
        logo: 'public/images/School_Logos/cndp.jpg',
        description: 'Établissement d\'excellence suivant le cursus éducatif français.',
        color: '#ffa000'
      },
    // Ajoutez d'autres écoles ici
  ];

  // Filtrer les écoles selon le critère sélectionné
  const filteredSchools = schools.filter(school => {
    if (filter === 'all') return true;
    return school.type === filter;
  });

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        {/* Cercles décoratifs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nos <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                écoles partenaires
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Plus de 150 établissements font déjà confiance à EcolePay pour la gestion de leurs paiements. 
              Découvrez nos écoles partenaires dans toute la Côte d'Ivoire.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section Filtres */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category.value
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setFilter(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section Écoles */}
      <section className="section">
        <div className="container-custom">
          {filteredSchools.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500">Aucune école trouvée pour cette catégorie.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchools.map((school, index) => (
                <motion.div
                  key={school.name}
                  className="card overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={school.logo} 
                      alt={school.name}
                      className="object-cover w-full h-48"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x400/${school.color?.replace('#', '') || '00838f'}/ffffff?text=${encodeURIComponent(school.name)}`;
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{school.name}</h3>
                  <div className="flex items-center mb-3">
                    <span className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {school.location}
                    </span>
                    <span className="ml-2 text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {school.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{school.description}</p>
                  <button className="text-primary font-medium hover:text-primary-dark transition-colors">
                    Voir les détails
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Vous ne trouvez pas votre école ?
            </h2>
            <p className="text-gray-600 mb-8">
              Nous ajoutons constamment de nouveaux partenaires. Contactez-nous pour suggérer votre établissement.
            </p>
            <button className="btn btn-primary">
              Suggérer une école
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Catégories d'écoles
const categories = [
  { value: 'all', label: 'Toutes les écoles' },
  { value: 'primary', label: 'Écoles primaires' },
  { value: 'secondary', label: 'Collèges' },
  { value: 'high', label: 'Lycées' },
  { value: 'university', label: 'Universités' },
  { value: 'professional', label: 'Écoles professionnelles' },
];

export default Schools;