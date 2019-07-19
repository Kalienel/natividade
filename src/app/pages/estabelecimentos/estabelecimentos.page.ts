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
  lrestaurantes: any;
  cardapio: any;
  item: object; 
 
  constructor(private crudService: CrudService, private router: Router) {
  }
 
  ngOnInit() {
    this.crudService.read_Restaurante().subscribe(data => {
 
      this.restaurantes = data.map(e => {
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
      this.lrestaurantes = this.restaurantes
      console.log(this.lrestaurantes);

    });
/*    var storageRef = firebase.storage().ref();
    var imagem = storageRef.child('quiosques/quiosque1.jpeg')
    imagem.getDownloadURL().then(result => {
      this.url = result;
      console.log(this.url)
    })*/

    var slides = document.querySelector('ion-slides');

    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    slides.options = {
      slidesPerView: 3,
      speed: 400,
      freeMode: true,
      width: 335,
    }
  }

  initializeItems(): void {
    this.restaurantes = this.lrestaurantes;
  }

  filterList(evt) {
    this.initializeItems();
    
    const searchTerm = evt.srcElement.value;
    
    if (!searchTerm) {
      return;
    }
    
    this.restaurantes = this.lrestaurantes.filter(rest => {
      if (rest.Nome && searchTerm) {
        if (rest.Nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });
  }

  filterCategoria(cat) {
    this.initializeItems();
    
    const searchTerm = cat;
    console.log(searchTerm)
    if (!searchTerm) {
      return;
    }
    
    this.restaurantes = this.lrestaurantes.filter(rest => {
      if (rest.Tipo && searchTerm) {
        if (rest.Tipo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });
  }

  verCardapio(item) {
    this.router.navigateByUrl('navtab/cardapio/' + item.id);
  }

}