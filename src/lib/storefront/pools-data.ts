import { Pool } from '@/types/storefront/pool';

export const pools: Pool[] = [
  {
    "id": "ninos",
    "name": "Piscina de Niños",
    "location": "Zona Infantil",
    "description": "Piscina interactiva con juegos y poca profundidad.",
    "panoramaUrl": "/newassets/piscina-infantil.webp",
    "thumbnailUrl": "/newassets/piscina-infantil-360.webp",
    "tags": [
      "Infantil",
      "Juegos"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 100 personas",
      "Reserva por franjas horarias",
      "Juegos interactivos"
    ],
    "price": 30000
  },
  {
    "id": "adulto1",
    "name": "Piscina Adultos 1",
    "location": "Zona Principal",
    "description": "Piscina recreativa amplia para adultos.",
    "panoramaUrl": "/newassets/piscina-olas.webp",
    "thumbnailUrl": "/newassets/piscina-olas-360.webp",
    "tags": [
      "Adultos",
      "Recreación"
    ],
    "rating": 5,
    "features": [
      "Reserva por franjas horarias",
      "Carriles de nado"
    ],
    "price": 40000
  },
  {
    "id": "adulto2",
    "name": "Piscina Adultos 2 (Infinita)",
    "location": "Zona VIP",
    "description": "Piscina infinita exclusiva.",
    "panoramaUrl": "/newassets/piscina-olas.webp",
    "thumbnailUrl": "/newassets/piscina-olas-360.webp",
    "tags": [
      "Adultos",
      "Infinita"
    ],
    "rating": 5,
    "features": [
      "Reserva por franjas horarias",
      "Bebidas"
    ],
    "price": 50000
  },
  {
    "id": "adulto3",
    "name": "Piscina Adultos 3 (Termal)",
    "location": "Spa",
    "description": "Piscina termal interior para relajación.",
    "panoramaUrl": "/newassets/piscina-olas.webp",
    "thumbnailUrl": "/newassets/piscina-olas-360.webp",
    "tags": [
      "Termal",
      "Relajación"
    ],
    "rating": 5,
    "features": [
      "Reserva por franjas horarias",
      "Agua climatizada"
    ],
    "price": 45000
  },
  {
    "id": "olas",
    "name": "Piscina de Olas",
    "location": "Parque Acuático",
    "description": "Gran piscina con sistema de olas artificiales y playa de arena.",
    "panoramaUrl": "/newassets/piscina-olas.webp",
    "thumbnailUrl": "/newassets/piscina-olas-360.webp",
    "tags": [
      "Olas",
      "Diversión"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 100 personas",
      "Reserva por franjas horarias"
    ],
    "price": 50000
  },
  {
    "id": "tobogan",
    "name": "Zona Toboganes (Tobogán)",
    "location": "Parque Acuático",
    "description": "Tobogán rápido con caída libre.",
    "panoramaUrl": "/newassets/tobogan-piscina-1.webp",
    "thumbnailUrl": "/newassets/tobogan-piscina-1-360.webp",
    "tags": [
      "Extremo",
      "Tobogán"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 30 personas",
      "Reserva por franjas horarias"
    ],
    "price": 35000
  },
  {
    "id": "inodoro",
    "name": "Zona Toboganes (Inodoro)",
    "location": "Parque Acuático",
    "description": "Atracción tipo embudo gigante.",
    "panoramaUrl": "/newassets/bowl-slide.webp",
    "thumbnailUrl": "/newassets/bowl-slide-360.webp",
    "tags": [
      "Extremo",
      "Embudo"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 20 personas",
      "Reserva por franjas horarias"
    ],
    "price": 35000
  },
  {
    "id": "luisita",
    "name": "Zona Toboganes (Luisita)",
    "location": "Parque Infantil Acuático",
    "description": "Tobogán mediano y seguro.",
    "panoramaUrl": "/newassets/tobogan-piscina-3.webp",
    "thumbnailUrl": "/newassets/tobogan-piscina-3-360.webp",
    "tags": [
      "Familiar",
      "Tobogán"
    ],
    "rating": 4,
    "features": [
      "Capacidad: 20 personas",
      "Reserva por franjas horarias"
    ],
    "price": 25000
  },
  {
    "id": "gym",
    "name": "Gimnasio",
    "location": "Centro Deportivo",
    "description": "Gimnasio completamente dotado con zona de cardio y pesas.",
    "panoramaUrl": "/newassets/gym.webp",
    "thumbnailUrl": "/newassets/gym-360.webp",
    "tags": [
      "Fitness",
      "Salud"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 40 personas",
      "Reserva por franjas horarias"
    ],
    "price": 20000
  },
  {
    "id": "turco",
    "name": "Baño Turco",
    "location": "Zona Húmeda",
    "description": "Baño de vapor relajante y saludable.",
    "panoramaUrl": "/newassets/bano-turco.webp",
    "thumbnailUrl": "/newassets/bano-turco-360.webp",
    "tags": [
      "Relajación",
      "Vapor"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 30 personas",
      "Reserva por franjas horarias"
    ],
    "price": 30000
  },
  {
    "id": "sauna",
    "name": "Sauna Privado",
    "location": "Zona Húmeda",
    "description": "Sauna seco en madera, completamente cerrado.",
    "panoramaUrl": "/newassets/turco.webp",
    "thumbnailUrl": "/newassets/turco-360.webp",
    "tags": [
      "Relajación",
      "Calor Seco"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 30 personas",
      "Reserva por franjas horarias"
    ],
    "price": 30000
  },
  {
    "id": "microfutbol",
    "name": "Cancha Microfútbol Sintética",
    "location": "Complejo Deportivo",
    "description": "Cancha sintética de microfútbol con cerramiento perimetral de seguridad e iluminación LED.",
    "panoramaUrl": "/newassets/micro-sintetica.webp",
    "thumbnailUrl": "/newassets/micro-sintetica-360.webp",
    "tags": [
      "Deportes",
      "Sintética",
      "Fútbol"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 14 personas",
      "Reserva por franjas horarias",
      "Iluminación nocturna LED"
    ],
    "price": 60000
  },
  {
    "id": "microfutbol2",
    "name": "Coliseo Microfútbol Cubierto",
    "location": "Complejo Deportivo",
    "description": "Moderna cancha techada en coliseo con gramilla sintética de alta amortiguación.",
    "panoramaUrl": "/newassets/cubierta.webp",
    "thumbnailUrl": "/newassets/cubierta-360.webp",
    "tags": [
      "Deportes",
      "Cubierta",
      "Fútbol"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 14 personas",
      "Ambiente techado protegido",
      "Graderías para público"
    ],
    "price": 75000
  },
  {
    "id": "futbol",
    "name": "Cancha de Fútbol 11",
    "location": "Complejo Deportivo",
    "description": "Campo de fútbol reglamentario en césped natural con graderías e iluminación profesional.",
    "panoramaUrl": "/newassets/futbol-11.webp",
    "thumbnailUrl": "/newassets/futbol-11-360.webp",
    "tags": [
      "Deportes",
      "Fútbol 11",
      "Profesional"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 22 personas",
      "Medidas oficiales FIFA",
      "Torres de iluminación"
    ],
    "price": 120000
  },
  {
    "id": "padel",
    "name": "Cancha de Pádel Panorámica",
    "location": "Complejo Deportivo",
    "description": "Pista de pádel con césped azul de última generación y cerramiento en cristal templado.",
    "panoramaUrl": "/newassets/padel.webp",
    "thumbnailUrl": "/newassets/padel-360.webp",
    "tags": [
      "Deportes",
      "Pádel",
      "Cristal"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 4 personas",
      "Cristal panorámico templado",
      "Césped sintético azul pro"
    ],
    "price": 70000
  },
  {
    "id": "tenis",
    "name": "Cancha de Tenis (Polvo de Ladrillo)",
    "location": "Complejo Deportivo",
    "description": "Cancha de tenis en polvo de ladrillo de estándar internacional.",
    "panoramaUrl": "/newassets/tenis.webp",
    "thumbnailUrl": "/newassets/tenis-360.webp",
    "tags": [
      "Deportes",
      "Tenis",
      "Arcilla"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 4 personas",
      "Superficie de arcilla / polvo de ladrillo",
      "Malla cortavientos perimetral"
    ],
    "price": 65000
  },
  {
    "id": "polideportivo1",
    "name": "Polideportivo 1",
    "location": "Complejo Deportivo",
    "description": "Cancha múltiple para varios deportes.",
    "panoramaUrl": "/newassets/poli-multi.webp",
    "thumbnailUrl": "/newassets/poli-multi-360.webp",
    "tags": [
      "Deportes",
      "Múltiple"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 12 personas",
      "Reserva por franjas horarias",
      "Reserva exclusiva disponible"
    ],
    "price": 50000
  },
  {
    "id": "polideportivo2",
    "name": "Polideportivo 2",
    "location": "Complejo Deportivo",
    "description": "Cancha múltiple adicional.",
    "panoramaUrl": "/newassets/poli-basket.webp",
    "thumbnailUrl": "/newassets/poli-basket-360.webp",
    "tags": [
      "Deportes",
      "Múltiple"
    ],
    "rating": 5,
    "features": [
      "Capacidad: 12 personas",
      "Reserva por franjas horarias",
      "Reserva exclusiva disponible"
    ],
    "price": 50000
  }
];
