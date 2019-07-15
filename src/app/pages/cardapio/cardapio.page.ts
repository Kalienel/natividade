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
  info: any;
  dados: any;
  nome: any;
  desc: any;
  estrelas: any;
  dist: any;
  tipo: any;
  estab: any;

// tslint:disable-next-line: max-line-length
  constructor(private db: AngularFirestore, private navCtrl: NavController, public alertController: AlertController, private route: ActivatedRoute, private fireStore: AngularFirestore) {
    /*this.item = this.route.snapshot.paramMap.get('item');
    /*const docRef = this.db.collection('restaurantes').doc(this.item);
    this.estab = db.doc<any>('restaurantes/quiosque2');
    this.nome = this.estab['Nome'];
    console.log(this.estab); */
    this.item = this.route.snapshot.paramMap.get('item');
    const docRef = this.db.collection('restaurantes').doc(this.item);
    docRef.ref.get().then(function(doc) {
      if (doc.exists) {
        let dados = doc.data();
        let nome = dados['Nome'];
        console.log(nome);
      }
    }
    )};

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
    /*this.item = this.route.snapshot.paramMap.get('item');
    const docRef = this.db.collection('restaurantes').doc(this.item);
    docRef.get().subscribe(function(doc) {
      if (doc.exists) {
        let dados = doc.data();
        let nome = dados['Nome'];
        let desc = dados['Desc'];
        let tipo = dados['Tipo'];
        let estrelas = dados['Estrelas'];
        let dist = dados['Dist'];
        console.log(nome);

      }
    });*/

  }

}
