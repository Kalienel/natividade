import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss'],
})
export class CompraComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {}

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      subHeader: 'Confirmar pedido',
      buttons: ['Realizar Compra']
    });

    await alert.present();
  }

}
