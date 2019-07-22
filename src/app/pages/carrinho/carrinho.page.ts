import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConfirmadaPage } from '../confirmada/confirmada.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  constructor(private navCtrl: NavController, public alertController: AlertController) { }

  click() {
    console.log('Carai funcionou asufhuashdua');
  }

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Deseja comprar esse produto?',
      subHeader: 'Seu cartão Visa final 3957 será utilizado',
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
            this.navCtrl.navigateRoot('/navtab/confirmada');
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
