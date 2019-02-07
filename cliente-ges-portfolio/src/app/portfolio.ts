export class Portfolio {
  constructor(
    private nombre: string,
    private descripcion: string,
    private archivo: string
  ) {
    if (this.nombre == "") {
      console.error("El nombre no puede estar vacío");
      throw new Error("El nombre no puede estar vacío");
    }
  }
}
