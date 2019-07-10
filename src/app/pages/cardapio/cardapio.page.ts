import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConfirmadaPage } from '../confirmada/confirmada.page';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  item: any;

  constructor(private navCtrl: NavController, public alertController: AlertController, private route: ActivatedRoute) { }

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Compra',
      subHeader: 'Deseja adicionar esse produto ao carrinho?',
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
    this.item = this.route.snapshot.paramMap.get('item');
  }

}
