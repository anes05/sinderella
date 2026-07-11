(function () {
  'use strict';

  var T = {
    fr: {
      /* topbar */
      'topbar.service': 'Toujours à votre service !',

      /* navbar */
      'nav.home': 'Accueil',
      'nav.products': 'Nos produits',
      'nav.about': 'À propos',
      'nav.contact': 'Contact',

      /* footer */
      'footer.desc': 'Producteur et distributeur de fruits secs de qualité supérieure.',
      'footer.menu': 'Menu',
      'footer.help': 'Aide',
      'footer.questions': 'Des questions ?',
      'footer.shipping': 'Informations de livraison',
      'footer.returns': 'Retours & Échanges',
      'footer.terms': 'Termes & Conditions',
      'footer.privacy': 'Politique de confidentialité',
      'footer.faq': 'FAQ',
      'footer.contact.link': 'Contact',

      /* index — hero */
      'hero.title': 'Nous servons la meilleure qualité',
      'hero.subtitle': 'Nous livrons des fruits secs naturels',

      /* index — services */
      'service.delivery': 'Livraison gratuite',
      'service.delivery.desc': 'Pour les commandes >300 DT',
      'service.fresh': 'Toujours frais',
      'service.fresh.desc': 'Produit bien emballé',
      'service.quality': 'Qualité supérieure',
      'service.quality.desc': 'Produits de qualité',

      /* index — categories */
      'cat.title': 'Fruits secs',
      'cat.tagline': 'La nature raffinée, déclinée en textures',

      /* index — best sellers */
      'bestsellers.title': 'Nos meilleures ventes',
      'bestsellers.desc': 'Choisis par des milliers, reconnus pour leur excellence.',
      'bs.cacahuete.croquant': 'Cacahuète Croquant',
      'bs.amande.croquant': 'Amande Croquant',
      'bs.cajou.croquant': 'Cajou Croquant',
      'bs.noisette.granule.croquant': 'Noisette Granulé Croquant',
      'bs.pistache.croquant': 'Pistache Croquant',

      /* amande */
      'amande.name': 'Amande',
      'amande.desc1': "Les amandes occupent une place importante dans le patrimoine agricole et alimentaire de la Tunisie. Introduite depuis l'Antiquité, la culture de l'amandier s'est développée grâce aux conditions climatiques favorables du pays, notamment dans les régions du Centre et du Sud telles que Sfax, Sidi Bouzid et Kasserine.",
      'amande.desc2': "Historiquement, l'amande était déjà cultivée à l'époque carthaginoise puis largement valorisée sous la civilisation arabo-musulmane, où elle était utilisée aussi bien dans l'alimentation que dans la médecine traditionnelle. Au fil des siècles, l'amandier est devenu une culture emblématique de l'agriculture tunisienne, reconnue pour sa résistance à la sécheresse et son importance économique.",
      'amande.products.title': 'Produits relatif aux amandes',
      'amande.products.desc': 'Déclinée en amandes entières, on offre une grande diversité de formes et de saveurs.',
      'amande.batonnet': 'Amande Bâtonnet',
      'amande.batonnet.torrifie': 'Amande Bâtonnet Torréfié',
      'amande.caramelise': 'Amande Caramélisé',
      'amande.croquant': 'Amande Croquant',
      'amande.effile': 'Amande Effilé',
      'amande.granule.torrifie': 'Granulé Torréfié',
      'amande.granules.blanches': 'Granulés Blancs',
      'amande.poudre.blanche': 'Poudre Blanche',
      'amande.poudre.caramelise': 'Poudre Caramélisée',
      'amande.poudre.croquant': 'Poudre Croquant',
      'amande.poudre.torrifie': 'Poudre Torréfiée',

      /* cajou */
      'cajou.name': 'Noix de Cajou',
      'cajou.products.title': 'Produits relatif aux noix de cajou',
      'cajou.products.desc': 'Déclinée en noix entières, on offre une grande diversité de formes et de saveurs.',
      'cajou.caramelise': 'Cajou Caramélisé',
      'cajou.croquant': 'Cajou Croquant',
      'cajou.granule.blanc': 'Cajou Granulé Blanc',
      'cajou.granule.torrifie': 'Cajou Granulée Torréfié',
      'cajou.poudre.blanche': 'Cajou Poudre Blanche',
      'cajou.poudre.caramelise': 'Cajou Poudre Caramélisé',
      'cajou.poudre.croquant': 'Cajou Poudre Croquant',
      'cajou.poudre.torrifie': 'Cajou Poudre Torréfié',
      'cajou.puree': 'Cajou Purée',

      /* cacahuete */
      'cacahuete.name': 'Cacahuète',
      'cacahuete.products.title': 'Produits relatif aux cacahuètes',
      'cacahuete.products.desc': 'Déclinée en cacahuètes entières, on offre une grande diversité de formes et de saveurs.',
      'cacahuete.batonnet.blanche': 'Cacahuète Bâtonnet Blanc',
      'cacahuete.batonnet.torrifie': 'Cacahuète Bâtonnet Torréfié',
      'cacahuete.granule.blanche': 'Cacahuète Granulé Blanc',
      'cacahuete.granule.caramelise': 'Cacahuète Granulée Caramélisée',
      'cacahuete.granule.croquant': 'Cacahuète Granulé Croquant',
      'cacahuete.granule.torrifie': 'Cacahuète Granulé Torréfié',
      'cacahuete.poudre.blanche': 'Cacahuète Poudre Blanche',
      'cacahuete.poudre.caramelise': 'Cacahuète Poudre Caramélisé',
      'cacahuete.poudre.croquant': 'Cacahuète Poudre Croquant',
      'cacahuete.poudre.torrifie': 'Cacahuète Poudre Torréfié',
      'cacahuete.puree.torrifie': 'Cacahuète Purée Torréfiée',

      /* noisette */
      'noisette.name': 'Noisette',
      'noisette.products.title': 'Produits relatif aux noisettes',
      'noisette.products.desc': 'Déclinée en noisettes entières, on offre une grande diversité de formes et de saveurs.',
      'noisette.entiere': 'Noisette Entière',
      'noisette.granule.blanc': 'Noisette Granulé Blanc',
      'noisette.granule.caramelise': 'Noisette Granulé Caramélisé',
      'noisette.granule.croquant': 'Noisette Granulé Croquant',
      'noisette.granule.torrifie': 'Noisette Granulé Torréfié',
      'noisette.poudre.caramelise': 'Noisette Poudre Caramélisée',
      'noisette.poudre.torrifie': 'Noisette Poudre Torréfiée',
      'noisette.puree': 'Purée de Noisette',

      /* pistache */
      'pistache.name': 'Pistache',
      'pistache.products.title': 'Produits relatif aux pistaches',
      'pistache.products.desc': 'Déclinée en pistaches entières, on offre une grande diversité de formes et de saveurs.',
      'pistache.croquant': 'Pistache Croquant',
      'pistache.granule': 'Pistache Granulé',
      'pistache.poudre.caramelise': 'Pistache Poudre Caramélisée',
      'pistache.poudre.non.torrifie': 'Pistache Poudre Non Torréfiée',
      'pistache.poudre.torrifie': 'Pistache Poudre Torréfiée',
      'pistache.puree': 'Pistache Purée',
    },

    en: {
      'topbar.service': 'Always at your service!',
      'nav.home': 'Home',
      'nav.products': 'Our Products',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'footer.desc': 'Producer and distributor of premium dried fruits.',
      'footer.menu': 'Menu',
      'footer.help': 'Help',
      'footer.questions': 'Have a Question?',
      'footer.shipping': 'Shipping Information',
      'footer.returns': 'Returns & Exchange',
      'footer.terms': 'Terms & Conditions',
      'footer.privacy': 'Privacy Policy',
      'footer.faq': 'FAQs',
      'footer.contact.link': 'Contact',
      'hero.title': 'We serve the best quality',
      'hero.subtitle': 'We deliver natural dried fruits',
      'service.delivery': 'Free Delivery',
      'service.delivery.desc': 'For orders above 300 DT',
      'service.fresh': 'Always Fresh',
      'service.fresh.desc': 'Product well packaged',
      'service.quality': 'Superior Quality',
      'service.quality.desc': 'Quality Products',
      'cat.title': 'Dried Fruits',
      'cat.tagline': 'Refined nature, in various textures',
      'bestsellers.title': 'Our Best Sellers',
      'bestsellers.desc': 'Chosen by thousands, praised for excellence, and designed to delight.',
      'bs.cacahuete.croquant': 'Crunchy Peanut',
      'bs.amande.croquant': 'Crunchy Almond',
      'bs.cajou.croquant': 'Crunchy Cashew',
      'bs.noisette.granule.croquant': 'Crunchy Hazelnut Granule',
      'bs.pistache.croquant': 'Crunchy Pistachio',
      'amande.name': 'Almond',
      'amande.desc1': "Almonds hold an important place in Tunisia's agricultural and food heritage. Introduced since Antiquity, almond tree cultivation has thrived thanks to the country's favorable climate, particularly in the central and southern regions such as Sfax, Sidi Bouzid and Kasserine.",
      'amande.desc2': "Historically, almonds were already cultivated during the Carthaginian era and later widely valued under the Arab-Muslim civilization, where they were used in both food and traditional medicine. Over the centuries, the almond tree has become an emblematic crop of Tunisian agriculture, known for its drought resistance and economic importance.",
      'amande.products.title': 'Almond Products',
      'amande.products.desc': 'Available in whole almonds, we offer a great variety of shapes and flavors.',
      'amande.batonnet': 'Almond Stick',
      'amande.batonnet.torrifie': 'Roasted Almond Stick',
      'amande.caramelise': 'Caramelized Almond',
      'amande.croquant': 'Crunchy Almond',
      'amande.effile': 'Sliced Almond',
      'amande.granule.torrifie': 'Roasted Granule',
      'amande.granules.blanches': 'White Granules',
      'amande.poudre.blanche': 'White Powder',
      'amande.poudre.caramelise': 'Caramelized Powder',
      'amande.poudre.croquant': 'Crunchy Powder',
      'amande.poudre.torrifie': 'Roasted Powder',
      'cajou.name': 'Cashew',
      'cajou.products.title': 'Cashew Products',
      'cajou.products.desc': 'Available in whole cashews, we offer a great variety of shapes and flavors.',
      'cajou.caramelise': 'Caramelized Cashew',
      'cajou.croquant': 'Crunchy Cashew',
      'cajou.granule.blanc': 'White Cashew Granule',
      'cajou.granule.torrifie': 'Roasted Cashew Granule',
      'cajou.poudre.blanche': 'Cashew White Powder',
      'cajou.poudre.caramelise': 'Cashew Caramelized Powder',
      'cajou.poudre.croquant': 'Cashew Crunchy Powder',
      'cajou.poudre.torrifie': 'Cashew Roasted Powder',
      'cajou.puree': 'Cashew Butter',
      'cacahuete.name': 'Peanut',
      'cacahuete.products.title': 'Peanut Products',
      'cacahuete.products.desc': 'Available in whole peanuts, we offer a great variety of shapes and flavors.',
      'cacahuete.batonnet.blanche': 'White Peanut Stick',
      'cacahuete.batonnet.torrifie': 'Roasted Peanut Stick',
      'cacahuete.granule.blanche': 'White Peanut Granule',
      'cacahuete.granule.caramelise': 'Caramelized Peanut Granule',
      'cacahuete.granule.croquant': 'Crunchy Peanut Granule',
      'cacahuete.granule.torrifie': 'Roasted Peanut Granule',
      'cacahuete.poudre.blanche': 'Peanut White Powder',
      'cacahuete.poudre.caramelise': 'Peanut Caramelized Powder',
      'cacahuete.poudre.croquant': 'Peanut Crunchy Powder',
      'cacahuete.poudre.torrifie': 'Peanut Roasted Powder',
      'cacahuete.puree.torrifie': 'Roasted Peanut Butter',
      'noisette.name': 'Hazelnut',
      'noisette.products.title': 'Hazelnut Products',
      'noisette.products.desc': 'Available in whole hazelnuts, we offer a great variety of shapes and flavors.',
      'noisette.entiere': 'Whole Hazelnut',
      'noisette.granule.blanc': 'White Hazelnut Granule',
      'noisette.granule.caramelise': 'Caramelized Hazelnut Granule',
      'noisette.granule.croquant': 'Crunchy Hazelnut Granule',
      'noisette.granule.torrifie': 'Roasted Hazelnut Granule',
      'noisette.poudre.caramelise': 'Hazelnut Caramelized Powder',
      'noisette.poudre.torrifie': 'Hazelnut Roasted Powder',
      'noisette.puree': 'Hazelnut Butter',
      'pistache.name': 'Pistachio',
      'pistache.products.title': 'Pistachio Products',
      'pistache.products.desc': 'Available in whole pistachios, we offer a great variety of shapes and flavors.',
      'pistache.croquant': 'Crunchy Pistachio',
      'pistache.granule': 'Pistachio Granule',
      'pistache.poudre.caramelise': 'Pistachio Caramelized Powder',
      'pistache.poudre.non.torrifie': 'Pistachio Raw Powder',
      'pistache.poudre.torrifie': 'Pistachio Roasted Powder',
      'pistache.puree': 'Pistachio Butter',
    },

    es: {
      'topbar.service': '¡Siempre a su servicio!',
      'nav.home': 'Inicio',
      'nav.products': 'Nuestros productos',
      'nav.about': 'Sobre nosotros',
      'nav.contact': 'Contacto',
      'footer.desc': 'Productor y distribuidor de frutos secos de calidad superior.',
      'footer.menu': 'Menú',
      'footer.help': 'Ayuda',
      'footer.questions': '¿Tienes preguntas?',
      'footer.shipping': 'Información de envío',
      'footer.returns': 'Devoluciones & Cambios',
      'footer.terms': 'Términos & Condiciones',
      'footer.privacy': 'Política de privacidad',
      'footer.faq': 'Preguntas frecuentes',
      'footer.contact.link': 'Contacto',
      'hero.title': 'Servimos la mejor calidad',
      'hero.subtitle': 'Entregamos frutos secos naturales',
      'service.delivery': 'Envío gratuito',
      'service.delivery.desc': 'Para pedidos superiores a 300 DT',
      'service.fresh': 'Siempre fresco',
      'service.fresh.desc': 'Producto bien envasado',
      'service.quality': 'Calidad superior',
      'service.quality.desc': 'Productos de calidad',
      'cat.title': 'Frutos secos',
      'cat.tagline': 'La naturaleza refinada, en diversas texturas',
      'bestsellers.title': 'Nuestros más vendidos',
      'bestsellers.desc': 'Elegidos por miles, reconocidos por su excelencia.',
      'bs.cacahuete.croquant': 'Cacahuete Crujiente',
      'bs.amande.croquant': 'Almendra Crujiente',
      'bs.cajou.croquant': 'Anacardo Crujiente',
      'bs.noisette.granule.croquant': 'Avellana Granulada Crujiente',
      'bs.pistache.croquant': 'Pistacho Crujiente',
      'amande.name': 'Almendra',
      'amande.desc1': "Las almendras ocupan un lugar importante en el patrimonio agrícola y alimentario de Túnez. Introducida desde la Antigüedad, el cultivo del almendro se ha desarrollado gracias a las condiciones climáticas favorables del país, especialmente en las regiones del Centro y Sur como Sfax, Sidi Bouzid y Kasserine.",
      'amande.desc2': "Históricamente, la almendra ya se cultivaba en la época cartaginesa y fue ampliamente valorada bajo la civilización árabe-musulmana, donde se utilizaba tanto en la alimentación como en la medicina tradicional. A lo largo de los siglos, el almendro se ha convertido en un cultivo emblemático de la agricultura tunecina.",
      'amande.products.title': 'Productos de Almendra',
      'amande.products.desc': 'Disponible en almendras enteras, ofrecemos una gran variedad de formas y sabores.',
      'amande.batonnet': 'Bastoncillo de Almendra',
      'amande.batonnet.torrifie': 'Bastoncillo de Almendra Tostada',
      'amande.caramelise': 'Almendra Caramelizada',
      'amande.croquant': 'Almendra Crujiente',
      'amande.effile': 'Almendra en Láminas',
      'amande.granule.torrifie': 'Granulado Tostado',
      'amande.granules.blanches': 'Gránulos Blancos',
      'amande.poudre.blanche': 'Polvo Blanco',
      'amande.poudre.caramelise': 'Polvo Caramelizado',
      'amande.poudre.croquant': 'Polvo Crujiente',
      'amande.poudre.torrifie': 'Polvo Tostado',
      'cajou.name': 'Anacardo',
      'cajou.products.title': 'Productos de Anacardo',
      'cajou.products.desc': 'Disponible en anacardos enteros, ofrecemos una gran variedad de formas y sabores.',
      'cajou.caramelise': 'Anacardo Caramelizado',
      'cajou.croquant': 'Anacardo Crujiente',
      'cajou.granule.blanc': 'Granulado Blanco de Anacardo',
      'cajou.granule.torrifie': 'Granulado Tostado de Anacardo',
      'cajou.poudre.blanche': 'Polvo Blanco de Anacardo',
      'cajou.poudre.caramelise': 'Polvo Caramelizado de Anacardo',
      'cajou.poudre.croquant': 'Polvo Crujiente de Anacardo',
      'cajou.poudre.torrifie': 'Polvo Tostado de Anacardo',
      'cajou.puree': 'Mantequilla de Anacardo',
      'cacahuete.name': 'Cacahuete',
      'cacahuete.products.title': 'Productos de Cacahuete',
      'cacahuete.products.desc': 'Disponible en cacahuetes enteros, ofrecemos una gran variedad de formas y sabores.',
      'cacahuete.batonnet.blanche': 'Bastoncillo de Cacahuete Blanco',
      'cacahuete.batonnet.torrifie': 'Bastoncillo de Cacahuete Tostado',
      'cacahuete.granule.blanche': 'Granulado Blanco de Cacahuete',
      'cacahuete.granule.caramelise': 'Granulado Caramelizado de Cacahuete',
      'cacahuete.granule.croquant': 'Granulado Crujiente de Cacahuete',
      'cacahuete.granule.torrifie': 'Granulado Tostado de Cacahuete',
      'cacahuete.poudre.blanche': 'Polvo Blanco de Cacahuete',
      'cacahuete.poudre.caramelise': 'Polvo Caramelizado de Cacahuete',
      'cacahuete.poudre.croquant': 'Polvo Crujiente de Cacahuete',
      'cacahuete.poudre.torrifie': 'Polvo Tostado de Cacahuete',
      'cacahuete.puree.torrifie': 'Mantequilla de Cacahuete Tostado',
      'noisette.name': 'Avellana',
      'noisette.products.title': 'Productos de Avellana',
      'noisette.products.desc': 'Disponible en avellanas enteras, ofrecemos una gran variedad de formas y sabores.',
      'noisette.entiere': 'Avellana Entera',
      'noisette.granule.blanc': 'Granulado Blanco de Avellana',
      'noisette.granule.caramelise': 'Granulado Caramelizado de Avellana',
      'noisette.granule.croquant': 'Granulado Crujiente de Avellana',
      'noisette.granule.torrifie': 'Granulado Tostado de Avellana',
      'noisette.poudre.caramelise': 'Polvo Caramelizado de Avellana',
      'noisette.poudre.torrifie': 'Polvo Tostado de Avellana',
      'noisette.puree': 'Mantequilla de Avellana',
      'pistache.name': 'Pistacho',
      'pistache.products.title': 'Productos de Pistacho',
      'pistache.products.desc': 'Disponible en pistachos enteros, ofrecemos una gran variedad de formas y sabores.',
      'pistache.croquant': 'Pistacho Crujiente',
      'pistache.granule': 'Granulado de Pistacho',
      'pistache.poudre.caramelise': 'Polvo Caramelizado de Pistacho',
      'pistache.poudre.non.torrifie': 'Polvo de Pistacho sin Tostar',
      'pistache.poudre.torrifie': 'Polvo Tostado de Pistacho',
      'pistache.puree': 'Mantequilla de Pistacho',
    }
  };

  function applyLang(lang) {
    if (!T[lang]) return;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[lang][key] !== undefined) {
        el.textContent = T[lang][key];
      }
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.dropdown-lang').forEach(function (el) {
      el.classList.toggle('lang-active', el.getAttribute('data-lang') === lang);
    });
  }

  window.setLang = function (lang) {
    localStorage.setItem('sinderella_lang', lang);
    applyLang(lang);
  };

  function init() {
    var lang = localStorage.getItem('sinderella_lang') || 'fr';
    applyLang(lang);

    /* re-apply after fetch-injected navbar is inserted */
    var navPlaceholder = document.getElementById('navbar');
    if (navPlaceholder) {
      new MutationObserver(function (_, obs) {
        applyLang(localStorage.getItem('sinderella_lang') || 'fr');
        obs.disconnect();
      }).observe(navPlaceholder, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
