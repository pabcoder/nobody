const SerVivo = require('./SerVivo');

class Persona extends SerVivo {
  constructor(nombre) {
    super(nombre, "Persona");
  }

  caminar() {
    console.log(
      "Esta persona camina distinto a un animal, y se llama " + this.nombre
    );
  }
}

module.exports = Persona;