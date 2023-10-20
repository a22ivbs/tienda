const productos = {
    "tiendadebicicletas": [
      {
        "id": 1,
        "nombre": "Bicicleta de montaña",
        "descripcion": "Bicicleta de montaña de alta calidad para terrenos accidentados.",
        "precio": 500,
        "stock": 10
      },
      {
        "id": 2,
        "nombre": "Bicicleta de carretera",
        "descripcion": "Bicicleta de carretera rápida y aerodinámica.",
        "precio": 700,
        "stock": 5
      },
      {
        "id": 3,
        "nombre": "Bicicleta plegable",
        "descripcion": "Bicicleta plegable compacta y fácil de transportar.",
        "precio": 300,
        "stock": 8
      },
      {
        "id": 4,
        "nombre": "Casco de bicicleta",
        "descripcion": "Casco de seguridad para ciclistas.",
        "precio": 50,
        "stock": 20
      }
    ]
  }

export async function getProductes() {
      return productos.tiendadebicicletas;
}