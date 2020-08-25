import { Component } from '@angular/core';
import { PrinterService } from '../servicios/printer.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private printer: PrinterService
  ) {}

  imprimir() {
    this.printer.enableBluetooth()
      .then(data => this.printer.searchBluetooth())
      .then(dispositivos => console.log({ dispositivos }))
  }

}
