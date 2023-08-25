class SerVivo {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  caminar() {
    console.log(
      "Esta(e) " + this.tipo + " de nombre " + this.nombre + " está caminando"
    );
  }
}

module.exports = SerVivo;