import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-alta", // <app-form-alta> etiqueta </app-form-alta>
  templateUrl: "./form-alta.component.html",
  styleUrls: ["./form-alta.component.css"]
})
export class FormAltaComponent implements OnInit {
  titulo: string;
  etiqueta_nombre: string;
  etiqueta_descripcion: string;
  etiqueta_archivo: string;
  placeholder_nombre: string;
  placeholder_descripcion: string;
  placeholder_archivo: string;
  nombreIntroducido: string;
  descripcionIntroducido: string;
  archivoIntroducido: string;
  constructor() {}

  ngOnInit() {
    // Método correspondiente al evento al iniicializar el componente
    this.titulo = "Alta de portfolios";
    this.etiqueta_nombre = "Nombre y Apellidos";
    this.placeholder_nombre = "Introduzca Nombre y Apellidos";
    // this.nombreIntroducido = "Voldemort";
    this.etiqueta_descripcion = "Descripción";
    this.placeholder_descripcion = "Introduzca una descripción";
    this.etiqueta_archivo = "Archivo";
    this.placeholder_archivo = "Introduzca un archivo";
  }
  limpiar() {
    this.nombreIntroducido = "";
  }
  limpiar2() {
    this.descripcionIntroducido = "";
  }
  limpiar3() {
    this.archivoIntroducido = "";
  }
  darAlta() {}
}
