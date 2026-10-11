/* ========================================
   DATOS MOCKEADOS - Banquetería Premium
   ======================================== */

const BANQUETERIA_DATA = {
  // Información del negocio
  business: {
    name: "Sabores de Autor",
    tagline: "Banquetería Premium & Catering de Lujo",
    phone: "+56 9 8765 4321",
    email: "contacto@saboresdeautor.cl",
    address: "Av. Apoquindo 4501, Las Condes, Santiago, Chile",
    schedule: [
      { day: "Lunes a Viernes", hours: "09:00 - 19:00" },
      { day: "Sábado", hours: "10:00 - 14:00" },
      { day: "Domingo", hours: "Cerrado" }
    ],
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      whatsapp: "https://wa.me/56987654321"
    },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3584866888094!2d-70.57558688479392!3d-33.40981298078239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c8a05b3eb1f9%3A0x4d44e4a06cf2d9f0!2sAv.%20Apoquindo%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1700000000000"
  },

  // Estadísticas
  stats: [
    { value: 15, suffix: "+", label: "Años de Experiencia" },
    { value: 1200, suffix: "+", label: "Eventos Realizados" },
    { value: 98, suffix: "%", label: "Satisfacción" },
    { value: 50, suffix: "+", label: "Colaboradores" }
  ],

  // Servicios
  services: [
    {
      id: 1,
      icon: "fa-ring",
      title: "Bodas de Ensueño",
      description: "Diseñamos la boda perfecta con menús personalizados, montaje elegante y atención de excelencia para tu día más especial.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
    },
    {
      id: 2,
      icon: "fa-building",
      title: "Eventos Corporativos",
      description: "Desde lanzamientos hasta galas empresariales. Catering profesional que refleja la imagen y valores de tu compañía.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
    },
    {
      id: 3,
      icon: "fa-champagne-glasses",
      title: "Cocktails & Recepciones",
      description: "Estaciones gourmet, finger food sofisticado y bartenders profesionales para reuniones inolvidables.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80"
    },
    {
      id: 4,
      icon: "fa-cake-candles",
      title: "Mesas de Dulces",
      description: "Diseños artísticos de mesas dulces con repostería fina, macarons, chocolates artesanales y mucho más.",
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80"
    },
    {
      id: 5,
      icon: "fa-utensils",
      title: "Catering Premium",
      description: "Servicio completo de catering con chefs especializados, ingredientes seleccionados y presentación impecable.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80"
    },
    {
      id: 6,
      icon: "fa-concierge-bell",
      title: "Producción Integral",
      description: "Coordinamos cada detalle: montaje, decoración, personal de servicio, ambientación y logística completa.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80"
    }
  ],

  // Galería
  gallery: [
    { id: 1, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80", category: "bodas", title: "Boda Campestre", desc: "Ceremonia al aire libre" },
    { id: 2, src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80", category: "bodas", title: "Recepción Nupcial", desc: "Montaje elegante en salón" },
    { id: 3, src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80", category: "corporativos", title: "Gala Empresarial", desc: "Evento corporativo premium" },
    { id: 4, src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80", category: "corporativos", title: "Conferencia Anual", desc: "Coffee break ejecutivo" },
    { id: 5, src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80", category: "cocktails", title: "Cocktail Sunset", desc: "Recepción en terraza" },
    { id: 6, src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80", category: "cocktails", title: "Bar Premium", desc: "Bartender profesional" },
    { id: 7, src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=1200&q=80", category: "dulces", title: "Mesa de Dulces", desc: "Diseño personalizado" },
    { id: 8, src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1200&q=80", category: "dulces", title: "Pastelería Fina", desc: "Macarons y petit fours" },
    { id: 9, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80", category: "corporativos", title: "Lanzamiento Producto", desc: "Evento de marca" },
    { id: 10, src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&q=80", category: "bodas", title: "Boda Íntima", desc: "Cena para 30 invitados" },
    { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=80", category: "cocktails", title: "Cena de Gala", desc: "Servicio 5 tenedores" },
    { id: 12, src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80", category: "dulces", title: "Torta de Boda", desc: "Diseño custom 3 pisos" }
  ],

  // Equipo
  team: [
    {
      name: "Chef María Soledad",
      role: "Chef Ejecutiva",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      bio: "20 años de experiencia en cocinas internacionales. Formada en Le Cordon Bleu Paris."
    },
    {
      name: "Carlos Mendoza",
      role: "Director de Eventos",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
      bio: "Especialista en producción de eventos de lujo. Más de 800 eventos producidos."
    },
    {
      name: "Valentina Rojas",
      role: "Pastelera Chef",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
      bio: "Maestra pastelera, creadora de las mesas de dulces más exclusivas de la región."
    },
    {
      name: "Andrés Pérez",
      role: "Sommelier",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      bio: "Sommelier certificado, experto en maridajes y curaduría de vinos para eventos."
    }
  ],

  // Testimonios
  testimonials: [
    {
      name: "Carolina & Sebastián",
      event: "Boda - Diciembre 2024",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      rating: 5,
      text: "Sabores de Autor convirtió nuestra boda en un sueño hecho realidad. Cada plato fue una obra de arte y el servicio fue impecable. Nuestros invitados no paran de felicitarnos."
    },
    {
      name: "Empresa Acme S.A.",
      event: "Gala Corporativa - 300 invitados",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      rating: 5,
      text: "Profesionalismo de primer nivel. Coordinaron todo sin que tuviéramos que preocuparnos por nada. El catering fue espectacular y nuestros clientes quedaron encantados."
    },
    {
      name: "Francisca Torres",
      event: "Cumpleaños 50 - 80 invitados",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      rating: 5,
      text: "Atención al detalle increíble. La mesa de dulces fue la sensación de la fiesta. Sin duda volveremos a confiar en ellos para futuros eventos familiares."
    },
    {
      name: "Rodrigo & Camila",
      event: "Aniversario - 50 invitados",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      rating: 5,
      text: "Celebrar nuestras bodas de plata con este catering fue lo mejor que pudimos haber elegido. Elegancia, sabor y un servicio que nos hizo sentir especiales toda la noche."
    }
  ],

  // Planes de precios
  pricing: [
    {
      name: "Esencial",
      tagline: "Para eventos íntimos",
      price: "$35.000",
      priceUnit: "por persona",
      featured: false,
      features: [
        "Servicio de mozos profesionales",
        "Menú de 3 tiempos",
        "Bebidas y cóctel de bienvenida",
        "Mantelería estándar blanca",
        "Montaje básico",
        "Coordinación el día del evento",
        "Mínimo 30 invitados"
      ]
    },
    {
      name: "Premium",
      tagline: "El más solicitado",
      price: "$58.000",
      priceUnit: "por persona",
      featured: true,
      features: [
        "Todo lo del plan Esencial",
        "Menú gourmet de 4 tiempos",
        "Estación de cocktails en vivo",
        "Mesa de dulces premium",
        "Mantelería y vajilla fina",
        "Decoración floral personalizada",
        "Coordinador exclusivo del evento",
        "Sommelier y bartender",
        "Mínimo 50 invitados"
      ]
    },
    {
      name: "Luxury",
      tagline: "Experiencia sin límites",
      price: "$95.000",
      priceUnit: "por persona",
      featured: false,
      features: [
        "Todo lo del plan Premium",
        "Menú degustación de 6 tiempos",
        "Chef ejecutivo en vivo",
        "Barra de champagne premium",
        "Diseño floral a medida",
        "Producción audiovisual",
        "Fotógrafo profesional",
        "Transporte VIP para invitados",
        "Mínimo 100 invitados"
      ]
    }
  ],

  // Servicios adicionales
  extras: [
    { icon: "fa-camera", title: "Fotografía Profesional", desc: "Cobertura completa del evento" },
    { icon: "fa-music", title: "Música & DJ", desc: "Sonido e iluminación profesional" },
    { icon: "fa-flower-tulip", title: "Decoración Floral", desc: "Diseños personalizados" },
    { icon: "fa-bus", title: "Transporte", desc: "Traslado VIP para invitados" },
    { icon: "fa-video", title: "Video & Drone", desc: "Producción audiovisual" },
    { icon: "fa-wand-magic-sparkles", title: "Ambientación", desc: "Decoración temática integral" }
  ],

  // Valores
  values: [
    {
      icon: "fa-gem",
      title: "Excelencia",
      description: "Cada detalle está cuidado con precisión y dedicación. Buscamos la perfección en cada plato y cada momento."
    },
    {
      icon: "fa-heart",
      title: "Pasión",
      description: "Amamos lo que hacemos y se refleja en cada preparación. La gastronomía es nuestro lenguaje para crear emociones."
    },
    {
      icon: "fa-leaf",
      title: "Frescura",
      description: "Trabajamos con productos frescos, de temporada y de productores locales para garantizar la mejor calidad."
    },
    {
      icon: "fa-handshake",
      title: "Compromiso",
      description: "Tu evento se convierte en el nuestro. Acompañamos cada proceso con cercanía y profesionalismo absoluto."
    }
  ]
};
