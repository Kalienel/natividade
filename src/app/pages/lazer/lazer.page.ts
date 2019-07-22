import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lazer',
  templateUrl: './lazer.page.html',
  styleUrls: ['./lazer.page.scss'],
})
export class LazerPage implements OnInit {

  constructor(private navCtrl: NavController, public alertController: AlertController) { }

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Esse é um alerta reserva',
      subHeader: 'Use caso o escopo normal mude',
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
            this.navCtrl.navigateRoot('/confirmada');
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
