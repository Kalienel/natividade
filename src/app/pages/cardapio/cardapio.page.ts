import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConfirmadaPage } from '../confirmada/confirmada.page';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  item: any;
  nome: any;
  desc: any;
  capa: any;
  tipo: any;
  estab: any;

// tslint:disable-next-line: max-line-length
  constructor(private db: AngularFirestore, private navCtrl: NavController, public alertController: AlertController, private route: ActivatedRoute, private fireStore: AngularFirestore) {
    }

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
    const docRef = this.db.collection('restaurantes').doc(this.item);
    this.getStorage(docRef)
  }

  async getStorage(docRef): Promise<any>{
    try {
      let obj = await docRef.ref.get().then(doc => {
        return {
          nome: doc.data()['Nome'],
          tipo: doc.data()['Tipo'],
          desc: doc.data()['Desc'],
          capa: doc.data()['Capa'],
          };
        });
      this.nome = obj.nome;
      this.tipo = obj.tipo;
      this.desc = obj.desc;
      this.capa = obj.capa;
    }
    catch(e) { console.log(e) }
  }

}
