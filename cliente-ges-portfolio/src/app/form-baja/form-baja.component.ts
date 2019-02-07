import { Component, OnInit } from "@angular/core";
import { PortfoliosService } from "../portfolios.service";

@Component({
  selector: "app-form-baja",
  templateUrl: "./form-baja.component.html",
  styleUrls: ["./form-baja.component.css"],
  providers: [PortfoliosService]
})
export class FormBajaComponent implements OnInit {
  titulo: string;
  etiqueta_nombre: string;
  placeholder_nombre: string;
  nombreIntroducido: string;
  servPortfolio: PortfoliosService;
  constructor(sp: PortfoliosService) {
    this.servPortfolio = sp;
  }

  ngOnInit() {
    this.titulo = "Baja de portfolios";
    this.etiqueta_nombre = "Nombre y Apellidos";
    this.placeholder_nombre = "Introduzca Nombre y Apellidos";
  }
  limpiar() {
    this.nombreIntroducido = "";
  }
  darBaja() {
    this.servPortfolio.baja(this.nombreIntroducido);
    console.log("<<< Está dado de baja >>>");
  }
}
