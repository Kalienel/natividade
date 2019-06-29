import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  constructor(public alertController: AlertController) { }

  click() {
    console.log('Carai funcionou asufhuashdua');
  }

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      subHeader: 'Confirmar pedido',
      buttons: ['Realizar Compra', 'Voltar']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
