import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';
import { IterableChangeRecord_ } from '@angular/core/src/change_detection/differs/default_iterable_differ';
import { NavController } from '@ionic/angular';
import { CardapioPage } from '../cardapio/cardapio.page';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import * as firebase from 'firebase';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.page.html',
  styleUrls: ['./estabelecimentos.page.scss'],
})

export class EstabelecimentosPage implements OnInit {

  restaurantes: any;
  cardapio: any;
  item: object;  
  url: any;
  capa: any;
;
 
  constructor(private crudService: CrudService, private router: Router) {
  }
 
  ngOnInit() {
    this.crudService.read_Restaurante().subscribe(data => {
 
      this.restaurantes = data.map(e => {
        this.capa = e.payload.doc.data()['Capa']
        return {
          id: e.payload.doc.id,
          Estrelas: e.payload.doc.data()['Estrelas'],
          Nome: e.payload.doc.data()['Nome'],
          Tipo: e.payload.doc.data()['Tipo'],
          Dist: e.payload.doc.data()['Dist'],
          Desc: e.payload.doc.data()['Desc'],
          Capa: e.payload.doc.data()['Capa'],
        };
      })
      console.log(this.restaurantes);

    });
/*    var storageRef = firebase.storage().ref();
    var imagem = storageRef.child('quiosques/quiosque1.jpeg')
    imagem.getDownloadURL().then(result => {
      this.url = result;
      console.log(this.url)
    })*/
  }

  verCardapio(item) {
    /*this.item = "alo";*/
    this.router.navigateByUrl('cardapio/' + item.id);
    /*console.log(this.item);*/
  }
  teste(){
    console.log("alo")
  }

}