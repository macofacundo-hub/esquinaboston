/* Esquina Boston · datos reales extraídos el 16/11/2026
   Fuentes: Instagram @esq.boston (bio y 11 posteos públicos) y ficha de Google Maps.
   Regla: acá no hay nada inventado. Lo que no se pudo confirmar va en `pendientes`
   o con valor null. No completar a ojo. */

window.EB = {
  negocio: {
    nombre: 'Esquina Boston',
    apodo: 'La Esquina',                       // así se nombran en sus posteos
    rubro: 'Bar restaurante',                  // categoría en Google Maps
    direccion: 'Av. Bolivia 1400 esq. Boston',
    barrio: 'Carrasco',                        // hashtag #carrasco en posteo del 29/06/2026
    ciudad: 'Montevideo',
    pais: 'Uruguay',
    codigoPostal: '11500',
    plusCode: '4W4M+MW Montevideo',
    coords: { lat: -34.8933267, lng: -56.0651391 },
    telefono: '2605 6488',
    telefonoHref: 'tel:+59826056488',
    whatsapp: null,                            // PENDIENTE: no figura en ninguna fuente
    instagram: { usuario: '@esq.boston', url: 'https://www.instagram.com/esq.boston/', seguidores: 894 },
    pedidosYa: 'https://www.pedidosya.com.uy/restaurantes/montevideo/esquina-boston-d99b48c8-0b94-44dc-a107-87a52b0e3396-menu',
    mapsUrl: 'https://www.google.com/maps/place/Esquina+Boston/@-34.8933267,-56.0651391,19z/data=!3m1!4b1!4m6!3m5!1s0x959f87ff5207aebb:0x1a92e1c03b4820a7!8m2!3d-34.8933267!4d-56.0651391!16s%2Fg%2F11z1322kdr',
    apertura: '2026-02-20',                    // flyer "Inauguramos la esquina · 20 de febrero"
    gastoPorPersona: '$400–600'                // dato que dejan los clientes en Google
  },

  /* Hay dos versiones del horario. Hasta confirmar se muestra la de Google,
     que es la más detallada. Ver pendientes. */
  horarios: {
    instagram: 'Martes a domingo de 19:30 a 00:30',
    google: [
      { dia: 'Lunes',     abre: null,    cierra: null },
      { dia: 'Martes',    abre: '19:30', cierra: '23:00' },
      { dia: 'Miércoles', abre: '19:30', cierra: '23:00' },
      { dia: 'Jueves',    abre: '19:30', cierra: '23:30' },
      { dia: 'Viernes',   abre: '19:30', cierra: '00:30' },
      { dia: 'Sábado',    abre: '19:30', cierra: '00:30' },
      { dia: 'Domingo',   abre: '19:30', cierra: '23:00' }
    ]
  },

  delivery: {
    dias: 'Jueves a domingo',                  // posteo del 12/03/2026
    canales: ['Teléfono 2605 6488', 'PedidosYa'],
    zona: null,                                // PENDIENTE
    costo: null                                // PENDIENTE
  },

  /* Carta: transcripción del destacado «MENU» de Instagram (publicado hace 19 semanas,
     julio de 2026 aprox.), que pasó el cliente el 16/11/2026. Reemplaza a la carta de
     Google Maps, que era más vieja. Precios en pesos uruguayos. No incluye bebidas. */
  moneda: { codigo: 'UYU', simbolo: '$' },
  carta: [
    {
      id: 'mega-mila',
      nombre: 'Mega Mila',
      descripcion: 'Colchón de fritas, milanesa, salsa de tomate, muzza y dos gustos a elección.',
      items: [
        { id: 'mila-mini',    nombre: 'Mini',         detalle: 'Mila de 20 cm de diámetro', precio: 645 },
        { id: 'mila-mega',    nombre: 'Mega',         detalle: 'Mila de 28 cm de diámetro', precio: 975 },
        { id: 'mila-quepa',   nombre: 'Quepa',        detalle: 'Mila de 32 cm de diámetro', precio: 1725 },
        { id: 'mega-boston',  nombre: 'Mega Boston',  detalle: 'Mila de 28 cm, cheddar, panceta, alioli, cebolla crispy, 4 huevos fritos y fritas x2', precio: 1175 },
        { id: 'mega-asesina', nombre: 'Mega Asesina', detalle: 'Mila de 28 cm entre dos pizzetas, con jamón, panceta, muzza, lechuga, tomate, aceitunas, morrón, cebolla, mayonesa y arriba salsa, más muzza y 4 huevos fritos', precio: 1495 },
        { id: 'mega-chivito', nombre: 'Mega Chivito', detalle: 'Chivito de 28 cm entre dos pizzetas, con jamón, panceta, muzza, huevo duro, lechuga, tomate, aceitunas, morrón, cebolla, mayonesa, y arriba más muzza y cebolla crispy', precio: 1295 }
      ],
      gustos: ['Albahaca', 'Cebolla', 'Cheddar', 'Ciboulette', 'Jamón', 'Morrón', 'Panceta',
               'Aceitunas', 'Huevo', 'Champiñón', 'Longaniza', 'Rúcula', 'Tomate'],
      gustosIncluidos: 2
    },
    {
      id: 'brutales',
      nombre: 'Brutales',
      descripcion: null,
      items: [
        { id: 'chivito',         nombre: 'Chivito',                           detalle: null, precio: 580 },
        { id: 'asesina',         nombre: 'Asesina',                           detalle: null, precio: 715 },
        { id: 'napolitana',      nombre: 'Milanesa napolitana',               detalle: null, precio: 645 },
        { id: 'promo-chivitos',  nombre: 'Promo 2 chivitos + refresco 1,5 L', detalle: null, precio: 1225 },
        { id: 'promo-napo',      nombre: 'Promo 2 napo + refresco 1,5 L',     detalle: null, precio: 1225 },
        { id: 'mila-pan',        nombre: 'Mila al pan',                       detalle: 'Sin fritas', precio: 255 },
        { id: 'mila-pan-fritas', nombre: 'Mila al pan con fritas',            detalle: null, precio: 315 },
        { id: 'mila-dos-panes',  nombre: 'Mila en dos panes',                 detalle: 'Sin fritas', precio: 315 },
        { id: 'mila-dos-fritas', nombre: 'Mila en dos panes con fritas',      detalle: null, precio: 375 }
      ]
    },
    {
      id: 'pizzas',
      nombre: 'Pizzas',
      descripcion: null,
      items: [
        { id: 'porcion-muzza',     nombre: 'Porción de muzza',              detalle: null, precio: 250 },
        { id: 'porcion-muzza-3x2', nombre: '3x2 porción de muzza',          detalle: null, precio: 500 },
        { id: 'metro-muzza',       nombre: 'Metro de muzza',                detalle: null, precio: 895 },
        { id: 'muzza-gustos',      nombre: 'Muzza con 2 gustos',            detalle: null, precio: 295 },
        { id: 'muzza-gustos-3x2',  nombre: '3x2 muzza con 2 gustos',        detalle: null, precio: 590 },
        { id: 'metro-gustos',      nombre: 'Metro de muzza con 2 gustos',   detalle: null, precio: 1050 },
        { id: 'pizzeta',           nombre: 'Pizzeta familiar',              detalle: null, precio: 475 },
        { id: 'pizzeta-gustos',    nombre: 'Pizzeta familiar con 2 gustos', detalle: null, precio: 550 }
      ]
    },
    {
      id: 'porciones',
      nombre: 'Porciones',
      descripcion: null,
      items: [
        { id: 'papas-porcion', nombre: 'Porción de papas',  detalle: null, precio: 295 },
        { id: 'papas-cheddar', nombre: 'Cheddar',           detalle: null, precio: 395 },
        { id: 'papas-panceta', nombre: 'Cheddar y panceta', detalle: null, precio: 415 },
        { id: 'papas-champi',  nombre: 'Champi',            detalle: null, precio: 415 },
        { id: 'papas-gramajo', nombre: 'Gramajo',           detalle: null, precio: 415 },
        { id: 'tequenos',      nombre: 'Tequeños',          detalle: null, precio: 260 }
      ]
    },
    {
      id: 'calientes',
      nombre: 'Calientes',
      descripcion: null,
      items: [
        { id: 'caliente-clasico',  nombre: 'Clásico',  detalle: null, precio: 285 },
        { id: 'caliente-caprese',  nombre: 'Caprese',  detalle: null, precio: 315 },
        { id: 'caliente-completo', nombre: 'Completo', detalle: null, precio: 415 }
      ]
    },
    {
      id: 'picadas',
      nombre: 'Picadas',
      descripcion: null,
      items: [
        { id: 'picada-boston',      nombre: 'Picada Boston',      detalle: 'Arrolladitos primavera, tequeños, aros de cebolla, papas, pizzeta familiar con 2 gustos a elección y salsas', precio: 995 },
        { id: 'picada-mila',        nombre: 'Picada Mila',        detalle: '3 milas con 2 gustos a elección cada una y papas', precio: 975 },
        { id: 'picada-combineta',   nombre: 'Picada Combineta',   detalle: 'Picada mila, aros de cebolla, tequeños, papas y salsas', precio: 1250 },
        { id: 'picada-vegetariana', nombre: 'Picada Vegetariana', detalle: 'Tequeños, papas, arrolladitos primavera y aros de cebolla', precio: 850 }
      ]
    }
  ],

  lema: 'Más que comida, un punto de encuentro.',   // pie de la carta de Instagram

  /* Marcas que se ven en las fotos de la ficha de Google. Sin logos: faltan permisos y lista oficial. */
  marcasVistas: ['Cabesas Bier', 'Coca-Cola', 'Schweppes'],

  fotos: {
    logo:          { src: 'assets/img/logo-esquina-boston.jpg', origen: 'Foto de perfil de Instagram (150 px)' },
    fachadaNoche:  { src: 'assets/img/fachada-noche.jpg',       origen: 'Google Maps, subida por Esquina Boston, mar 2026' },
    fachadaVereda: { src: 'assets/img/fachada-vereda.jpg',      origen: 'Google Maps' },
    bandeja:       { src: 'assets/img/bandeja-terraza.jpg',     origen: 'Google Maps' },
    terrazaResenas:{ src: 'assets/img/resenas-terraza.webp',   origen: 'Google Maps (recorte de bandeja-terraza.jpg)' },
    platoHuevo:    { src: 'assets/img/plato-huevo.jpg',         origen: 'Google Maps' },
    papasMesa:     { src: 'assets/img/papas-cheddar-mesa.jpg',  origen: 'Google Maps' },
    milaxx:        { src: 'assets/img/milaxx-cheddar.jpg',      origen: 'Google Maps' },
    musica:        { src: 'assets/img/musica-en-vivo.jpg',      origen: 'Instagram, 04/07/2026' },
    chivitos:      { src: 'assets/img/chivitos.jpg',            origen: 'Instagram, 29/04/2026' },
    esquinaNoche:  { src: 'assets/img/esquina-noche.jpg',       origen: 'Instagram, 15/04/2026' },
    milaxxBandeja: { src: 'assets/img/milaxx-bandeja.jpg',      origen: 'Instagram, 03/04/2026' },
    megaTenedor:   { src: 'assets/img/mega-tenedor.jpg',        origen: 'Instagram, 31/03/2026' },
    cartel:        { src: 'assets/img/cartel-neon.jpg',         origen: 'Instagram, 06/03/2026' },
    recorteMila:   { src: 'assets/cut/milaxx-720.webp',          origen: 'Recorte de milaxx-cheddar.jpg' },
    recortePapas:  { src: 'assets/cut/papas-cheddar.png',       origen: 'Recorte de papas-cheddar-mesa.jpg' }
  },

  /* Posteos públicos de Instagram, texto original. */
  novedades: [
    { fecha: '2026-08-21', texto: 'Los esperamos en La Esquina!', url: 'https://www.instagram.com/esq.boston/p/DcUQhLRvSx3/' },
    { fecha: '2026-07-04', texto: 'Ayer la esquina se llenó de buena onda y gente linda. Gracias a todos los que pasaron y a Matías por regalarnos una noche llena de música. Nos vemos en la próxima!', url: 'https://www.instagram.com/esq.boston/p/DaY9dTrjR_m/', foto: 'musica' },
    { fecha: '2026-06-29', texto: 'Viernes de música, comida y amigos. Este viernes viene Matías Diego a Esquina Boston. 3 de julio, 21:30 hs. Caé con tu gente, nosotros nos encargamos del resto.', url: 'https://www.instagram.com/esq.boston/p/DaLvcZFvkQ8/' },
    { fecha: '2026-04-29', texto: 'El antojo tiene nombre: chivito de Esquina Boston. De esos que no se explican, se prueban. Caé al local o pedilo por PedidosYa.', url: 'https://www.instagram.com/esq.boston/p/DXu1OlNDzo5/', foto: 'chivitos' },
    { fecha: '2026-04-15', texto: 'Hoy la noche pide Esquina Boston. Pedí por PedidosYa o venite al local.', url: 'https://www.instagram.com/esq.boston/p/DXKx1fIj9cU/', foto: 'esquinaNoche' },
    { fecha: '2026-03-30', texto: 'Razones para venir a Esquina Boston no faltan.', url: 'https://www.instagram.com/esq.boston/p/DWrqCtaDWQS/', foto: 'milaxxBandeja' },
    { fecha: '2026-03-30', texto: 'Tus noches mejoran un 100% si venís a La Esquina a comer una MEGA.', url: 'https://www.instagram.com/esq.boston/p/DWj7seJDbwN/', foto: 'megaTenedor' },
    { fecha: '2026-03-19', texto: 'A quién vemos el viernes en la esquina. Buena música, buena comida, buena cerveza. Los esperamos!!', url: 'https://www.instagram.com/esq.boston/p/DWE-vb-DVGN/' },
    { fecha: '2026-03-12', texto: 'Hacenos tu pedido. Te llevamos la Mega Mila hasta tu casa. 2605 6488. Delivery de jueves a domingo.', url: 'https://www.instagram.com/esq.boston/p/DVzVmhND_rm/' },
    { fecha: '2026-03-06', texto: 'Un poco de lo que fue la apertura de ESQUINA BOSTON.', url: 'https://www.instagram.com/esq.boston/p/DVj5awRj596/', foto: 'cartel' },
    { fecha: '2026-02-17', texto: 'El nuevo lugar para juntarse y pasarla bien. Los esperamos con buena música, comida y bebida.', url: 'https://www.instagram.com/esq.boston/p/DU380CzD5L5/' }
  ],

  /* Google Maps, sin sesión solo deja ver 3 de las 30 opiniones. */
  valoracion: { promedio: 4.9, cantidad: 30, fuente: 'Google Maps', reparto: { 5: 29, 4: 0, 3: 0, 2: 0, 1: 1 },
                menciones: [{ tema: 'milanesa', veces: 5 }, { tema: 'pizza', veces: 2 }] },
  resenas: [
    { autor: 'Lucía Cáceres', estrellas: 5, cuando: 'Hace 4 meses',
      texto: 'La mejor milanesa de Uruguay! Porción gigante, súper súper abundante. Papas deliciosas. La atención un mil. Nuevo spot favorito en el barrio!' },
    { autor: 'ndu ue', estrellas: 5, cuando: 'Hace 6 meses',
      texto: 'Excelente lugar! Muy buena onda y la comida riquísima. Realmente abundantes porciones y todo muy fresco.' },
    { autor: 'Abril Otero Casagrande', estrellas: 5, cuando: 'Hace 6 meses',
      texto: 'Me encantó! Buenísimo todo, un montón de comida y la atención excelente! Muy satisfecha con todo, gracias!' }
  ],
  resenasPermiso: true,                        // confirmado el 16/11/2026: el dueño autorizó mostrarlas

  pendientes: [
    'Carta: la del destacado MENU de Instagram es de hace 19 semanas. Confirmar precios vigentes y agregar bebidas si se quieren mostrar.',
    'Horario: Instagram dice martes a domingo 19:30 a 00:30; Google marca cierres distintos por día. ¿Cuál vale?',
    'WhatsApp: no figura en ninguna fuente.',
    'Delivery: zona, costo y pedido mínimo.',
    'Reseñas de Google: sin sesión solo se ven 3 de 30. Si quieren mostrar más, pasar los textos.',
    'Fotos de Google Maps: confirmar que son del local o que hay permiso de quien las subió.',
    'Logo: solo hay una versión de 150 px. Pedir archivo vectorial.',
    'Marcas de bebidas: lista oficial y permiso para usar logos.'
  ]
};
