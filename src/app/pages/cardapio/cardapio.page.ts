import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConfirmadaPage } from '../confirmada/confirmada.page';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { NOMEM } from 'dns';


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

// tslint:disable-next-line: max-line-length
  constructor(private db: AngularFirestore, private navCtrl: NavController, public alertController: AlertController, private route: ActivatedRoute, private fireStore: AngularFirestore) { }

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
    /*this.item = this.route.snapshot.paramMap.get('item');*/
    this.item = this.route.snapshot.paramMap.get('item');
    let docRef = this.db.collection('restaurantes').doc(this.item);
    docRef.get().subscribe(function(doc) {
      if (doc.exists) {
// tslint:disable-next-line: prefer-const
        let dados = doc.data();
        this.nome = dados['Nome'];
        this.desc = dados['Desc'];
        this.tipo = dados['Tipo'];
        this.estrelas = dados['Estrelas'];
        this.dist = dados['Dist'];
        /*this.nome = dados.nome;
        this.desc = doc.data().desc;
        this.tipo = doc.data().tipo;
        this.estrelas = doc.data().estrelas;
        this.dist = doc.data().dist;*/
        console.log(dados);

      }
    })

  }

}
