const SerVivo = require('./SerVivo');

class Animal extends SerVivo {
  constructor(nombre) {
    super(nombre, "Animal");
  }
}

module.exports = Animal;
