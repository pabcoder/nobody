const lodash = require('lodash');

const array = [
  {
    "id": "64e565118c5cbaced565d200",
    "nombre": "Bradford",
    "apellido": "Sheppard",
    "edad": 32,
    "ciudad": "Durham"
  },
  {
    "id": "64e56511aafdd9cc3d22558a",
    "nombre": "Horne",
    "apellido": "Mathis",
    "edad": 46,
    "ciudad": "Roberts"
  },
  {
    "id": "64e565114021e6d5f019cc72",
    "nombre": "Merritt",
    "apellido": "Sykes",
    "edad": 46,
    "ciudad": "Edenburg"
  },
  {
    "id": "64e5651121a0a5ce29f3c296",
    "nombre": "Snider",
    "apellido": "Mann",
    "edad": 38,
    "ciudad": "Marbury"
  },
  {
    "id": "64e565116b1c57136aa9d5b8",
    "nombre": "Mccarthy",
    "apellido": "Holt",
    "edad": 11,
    "ciudad": "Falmouth"
  }
]

const resultado = lodash.sortBy(array, 'ciudad');

console.log(resultado);
