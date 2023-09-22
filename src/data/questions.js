const preguntas = [
  {
    pregunta: {
      id: 1,
      enunciado: "¿Cuál es la capital de Francia?",
      dificultad: 1
    },
    respuestas: [
      {
        id: 1,
        texto: "Berlín",
        correcta: false
      },
      {
        id: 2,
        texto: "Londres",
        correcta: false
      },
      {
        id: 3,
        texto: "París",
        correcta: true
      },
      {
        id: 4,
        texto: "Madrid",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 2,
      enunciado: "¿Cuál es el resultado de 2 + 2?",
      dificultad: 1
    },
    respuestas: [
      {
        id: 5,
        texto: "3",
        correcta: false
      },
      {
        id: 6,
        texto: "4",
        correcta: true
      },
      {
        id: 7,
        texto: "5",
        correcta: false
      },
      {
        id: 8,
        texto: "6",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 3,
      enunciado: "¿En qué año se descubrió América?",
      dificultad: 1
    },
    respuestas: [
      {
        id: 9,
        texto: "1200",
        correcta: false
      },
      {
        id: 10,
        texto: "1880",
        correcta: false
      },
      {
        id: 11,
        texto: "1492",
        correcta: true
      },
      {
        id: 12,
        texto: "1455",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 4,
      enunciado: "¿Cuál es el planeta más grande del sistema solar?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 13,
        texto: "Júpiter",
        correcta: true
      },
      {
        id: 14,
        texto: "Saturno",
        correcta: false
      },
      {
        id: 15,
        texto: "Marte",
        correcta: false
      },
      {
        id: 16,
        texto: "Venus",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 5,
      enunciado: "¿Quién escribió la obra 'Romeo y Julieta'?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 17,
        texto: "William Shakespeare",
        correcta: true
      },
      {
        id: 18,
        texto: "Federico García Lorca",
        correcta: false
      },
      {
        id: 19,
        texto: "Pablo Neruda",
        correcta: false
      },
      {
        id: 20,
        texto: "Miguel de Cervantes",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 6,
      enunciado: "¿Cuál es el río más largo del mundo?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 21,
        texto: "Río Amazonas",
        correcta: true
      },
      {
        id: 22,
        texto: "Río Nilo",
        correcta: false
      },
      {
        id: 23,
        texto: "Río Mississippi",
        correcta: false
      },
      {
        id: 24,
        texto: "Río Yangtsé",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 7,
      enunciado: "¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 25,
        texto: "1945",
        correcta: true
      },
      {
        id: 26,
        texto: "1919",
        correcta: false
      },
      {
        id: 27,
        texto: "1950",
        correcta: false
      },
      {
        id: 28,
        texto: "1960",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 8,
      enunciado: "¿Cuál es la montaña más alta del mundo?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 29,
        texto: "Monte Kilimanjaro",
        correcta: false
      },
      {
        id: 30,
        texto: "Monte Aconcagua",
        correcta: false
      },
      {
        id: 31,
        texto: "Monte McKinley",
        correcta: false
      },
      {
        id: 32,
        texto: "Monte Everest",
        correcta: true
      }
    ]
  },
  {
    pregunta: {
      id: 9,
      enunciado: "¿Cuál es el océano más grande del mundo?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 33,
        texto: "Océano Atlántico",
        correcta: false
      },
      {
        id: 34,
        texto: "Océano Índico",
        correcta: false
      },
      {
        id: 35,
        texto: "Océano Pacífico",
        correcta: true
      },
      {
        id: 36,
        texto: "Océano Ártico",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 10,
      enunciado: "¿Cuál es el proceso natural por el cual las plantas producen su propio alimento?",
      dificultad: 1
    },
    respuestas: [
      {
        id: 37,
        texto: "Fotosíntesis",
        correcta: true
      },
      {
        id: 38,
        texto: "Respiración",
        correcta: false
      },
      {
        id: 39,
        texto: "Transpiración",
        correcta: false
      },
      {
        id: 40,
        texto: "Fermentación",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 11,
      enunciado: "¿Quién fue el primer presidente de los Estados Unidos?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 41,
        texto: "George Washington",
        correcta: true
      },
      {
        id: 42,
        texto: "Thomas Jefferson",
        correcta: false
      },
      {
        id: 43,
        texto: "Benjamin Franklin",
        correcta: false
      },
      {
        id: 44,
        texto: "John Adams",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 12,
      enunciado: "¿Cuál es el símbolo químico del oxígeno?",
      dificultad: 1
    },
    respuestas: [
      {
        id: 45,
        texto: "O2",
        correcta: false
      },
      {
        id: 46,
        texto: "H2O",
        correcta: false
      },
      {
        id: 47,
        texto: "O",
        correcta: true
      },
      {
        id: 48,
        texto: "CO2",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 13,
      enunciado: "¿Cuál es el instrumento musical de viento más largo?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 49,
        texto: "Flauta",
        correcta: false
      },
      {
        id: 50,
        texto: "Saxofón",
        correcta: false
      },
      {
        id: 51,
        texto: "Trompeta",
        correcta: false
      },
      {
        id: 52,
        texto: "Tuba",
        correcta: true
      }
    ]
  },
  {
    pregunta: {
      id: 15,
      enunciado: "¿En qué país se encuentra la Gran Muralla?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 62,
        texto: "Japón",
        correcta: false
      },
      {
        id: 63,
        texto: "Corea del Sur",
        correcta: false
      },
      {
        id: 64,
        texto: "India",
        correcta: false
      },
      {
        id: 65,
        texto: "China",
        correcta: true
      }
    ]
  },
  {
    pregunta: {
      id: 16,
      enunciado: "¿Cuál es el metal más abundante en la corteza terrestre?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 66,
        texto: "Hierro",
        correcta: true
      },
      {
        id: 67,
        texto: "Aluminio",
        correcta: false
      },
      {
        id: 68,
        texto: "Cobre",
        correcta: false
      },
      {
        id: 69,
        texto: "Oro",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 17,
      enunciado: "¿Cuál es el símbolo químico del hidrógeno?",
      dificultad: 1
    },
    respuestas: [
      {
        id: 70,
        texto: "H",
        correcta: true
      },
      {
        id: 71,
        texto: "O",
        correcta: false
      },
      {
        id: 72,
        texto: "He",
        correcta: false
      },
      {
        id: 73,
        texto: "N",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 18,
      enunciado: "¿Cuál es el océano más pequeño del mundo?",
      dificultad: 1
    },
    respuestas: [
      {
        id: 74,
        texto: "Océano Pacífico",
        correcta: false
      },
      {
        id: 75,
        texto: "Océano Atlántico",
        correcta: false
      },
      {
        id: 76,
        texto: "Océano Índico",
        correcta: false
      },
      {
        id: 77,
        texto: "Océano Ártico",
        correcta: true
      }
    ]
  },
  {
    pregunta: {
      id: 19,
      enunciado: "¿En qué año se llevó a cabo la Revolución Rusa?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 78,
        texto: "1905",
        correcta: false
      },
      {
        id: 79,
        texto: "1917",
        correcta: true
      },
      {
        id: 80,
        texto: "1923",
        correcta: false
      },
      {
        id: 81,
        texto: "1931",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 20,
      enunciado: "¿Quién pintó la Mona Lisa?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 82,
        texto: "Vincent van Gogh",
        correcta: false
      },
      {
        id: 83,
        texto: "Pablo Picasso",
        correcta: false
      },
      {
        id: 84,
        texto: "Leonardo da Vinci",
        correcta: true
      },
      {
        id: 85,
        texto: "Rembrandt",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 21,
      enunciado: "¿Cuál es el metal más ligero?",
      dificultad: 1
    },
    respuestas: [
      {
        id: 86,
        texto: "Hierro",
        correcta: false
      },
      {
        id: 87,
        texto: "Oro",
        correcta: false
      },
      {
        id: 88,
        texto: "Plata",
        correcta: false
      },
      {
        id: 89,
        texto: "Aluminio",
        correcta: true
      }
    ]
  },
  {
    pregunta: {
      id: 22,
      enunciado: "¿Cuál es el océano más cálido?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 90,
        texto: "Océano Atlántico",
        correcta: false
      },
      {
        id: 91,
        texto: "Océano Índico",
        correcta: false
      },
      {
        id: 92,
        texto: "Océano Pacífico",
        correcta: false
      },
      {
        id: 93,
        texto: "Océano Índico",
        correcta: true
      }
    ]
  },
  {
    pregunta: {
      id: 23,
      enunciado: "¿En qué país se encuentra la ciudad de Dubái?",
      dificultad: 1
    },
    respuestas: [
      {
        id: 94,
        texto: "Arabia Saudita",
        correcta: false
      },
      {
        id: 95,
        texto: "Emiratos Árabes Unidos",
        correcta: true
      },
      {
        id: 96,
        texto: "Qatar",
        correcta: false
      },
      {
        id: 97,
        texto: "Kuwait",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 24,
      enunciado: "¿Cuál es la moneda oficial de Japón?",
      dificultad: 1
    },
    respuestas: [
      {
        id: 98,
        texto: "Yen",
        correcta: true
      },
      {
        id: 99,
        texto: "Dólar",
        correcta: false
      },
      {
        id: 100,
        texto: "Euro",
        correcta: false
      },
      {
        id: 101,
        texto: "Libra esterlina",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 25,
      enunciado: "¿Cuál es la capital de Australia?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 102,
        texto: "Sídney",
        correcta: false
      },
      {
        id: 103,
        texto: "Melbourne",
        correcta: false
      },
      {
        id: 104,
        texto: "Brisbane",
        correcta: false
      },
      {
        id: 105,
        texto: "Canberra",
        correcta: true
      }
    ]
  },
  {
    pregunta: {
      id: 26,
      enunciado: "¿Cuál es el río que atraviesa la ciudad de El Cairo?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 106,
        texto: "Río Támesis",
        correcta: false
      },
      {
        id: 107,
        texto: "Río Nilo",
        correcta: true
      },
      {
        id: 108,
        texto: "Río Danubio",
        correcta: false
      },
      {
        id: 109,
        texto: "Río Amazonas",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 27,
      enunciado: "¿En qué continente se encuentra la cordillera de los Andes?",
      dificultad: 1
    },
    respuestas: [
      {
        id: 110,
        texto: "África",
        correcta: false
      },
      {
        id: 111,
        texto: "Europa",
        correcta: false
      },
      {
        id: 112,
        texto: "Asia",
        correcta: false
      },
      {
        id: 113,
        texto: "América del Sur",
        correcta: true
      }
    ]
  },
  {
    pregunta: {
      id: 28,
      enunciado: "¿Cuál es el animal más grande del mundo?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 114,
        texto: "Elefante africano",
        correcta: false
      },
      {
        id: 115,
        texto: "Ballena azul",
        correcta: true
      },
      {
        id: 116,
        texto: "Jirafa",
        correcta: false
      },
      {
        id: 117,
        texto: "Gorila",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 29,
      enunciado: "¿Quién escribió la novela 'Cien años de soledad'?",
      dificultad: 2
    },
    respuestas: [
      {
        id: 118,
        texto: "Gabriel García Márquez",
        correcta: true
      },
      {
        id: 119,
        texto: "Pablo Neruda",
        correcta: false
      },
      {
        id: 120,
        texto: "Julio Cortázar",
        correcta: false
      },
      {
        id: 121,
        texto: "Mario Vargas Llosa",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 30,
      enunciado: "¿Cuál es el proceso químico por el cual las plantas convierten la luz en energía?",
      dificultad: 1
    },
    respuestas: [
      {
        id: 122,
        texto: "Respiración",
        correcta: false
      },
      {
        id: 123,
        texto: "Fotosíntesis",
        correcta: true
      },
      {
        id: 124,
        texto: "Fermentación",
        correcta: false
      },
      {
        id: 125,
        texto: "Digestión",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 31,
      enunciado: "¿Cuál es la fórmula química del ADN?",
      dificultad: 3
    },
    respuestas: [
      {
        id: 126,
        texto: "RNA",
        correcta: false
      },
      {
        id: 127,
        texto: "ATP",
        correcta: false
      },
      {
        id: 128,
        texto: "DNA",
        correcta: false
      },
      {
        id: 129,
        texto: "ADN",
        correcta: true
      }
    ]
  },
  {
    pregunta: {
      id: 32,
      enunciado: "¿Cuál es el planeta más cercano al Sol?",
      dificultad: 3
    },
    respuestas: [
      {
        id: 130,
        texto: "Marte",
        correcta: false
      },
      {
        id: 131,
        texto: "Júpiter",
        correcta: false
      },
      {
        id: 132,
        texto: "Venus",
        correcta: true
      },
      {
        id: 133,
        texto: "Saturno",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 33,
      enunciado: "¿Cuál es el compuesto químico que constituye la capa de ozono?",
      dificultad: 3
    },
    respuestas: [
      {
        id: 134,
        texto: "Ozono (O3)",
        correcta: true
      },
      {
        id: 135,
        texto: "Oxígeno (O2)",
        correcta: false
      },
      {
        id: 136,
        texto: "Dióxido de carbono (CO2)",
        correcta: false
      },
      {
        id: 137,
        texto: "Nitrógeno (N2)",
        correcta: false
      }
    ]
  },
  {
    pregunta: {
      id: 34,
      enunciado: "¿Cuál es el ácido presente en el jugo gástrico del estómago humano?",
      dificultad: 3
    },
    respuestas: [
      {
        id: 138,
        texto: "Ácido ascórbico",
        correcta: false
      },
      {
        id: 139,
        texto: "Ácido acético",
        correcta: false
      },
      {
        id: 140,
        texto: "Ácido cítrico",
        correcta: false
      },
      {
        id: 141,
        texto: "Ácido clorhídrico",
        correcta: true
      }
    ]
  },
  {
    pregunta: {
      id: 35,
      enunciado: "¿Cuál es el período de rotación de Venus?",
      dificultad: 3
    },
    respuestas: [
      {
        id: 142,
        texto: "12 horas",
        correcta: false
      },
      {
        id: 143,
        texto: "24 horas",
        correcta: false
      },
      {
        id: 144,
        texto: "48 horas",
        correcta: false
      },
      {
        id: 145,
        texto: "243 días",
        correcta: true
      }
    ]
  }
]

export default preguntas
