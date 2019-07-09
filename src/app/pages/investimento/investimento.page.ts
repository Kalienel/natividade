import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.page.html',
  styleUrls: ['./investimento.page.scss'],
})
export class InvestimentoPage implements OnInit {

  constructor(public alertController: AlertController) { }

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Compra',
      subHeader: 'Deseja comprar essa ação?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Compra cancelada');
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log('Compra realizada');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
