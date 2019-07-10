import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';
import { IterableChangeRecord_ } from '@angular/core/src/change_detection/differs/default_iterable_differ';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.page.html',
  styleUrls: ['./estabelecimentos.page.scss'],
})
export class EstabelecimentosPage implements OnInit {

  restaurantes: any;
 
  constructor(private crudService: CrudService) {}
 
  ngOnInit() {
    this.crudService.read_Restaurante().subscribe(data => {
 
      this.restaurantes = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Estrelas: e.payload.doc.data()['Estrelas'],
          Nome: e.payload.doc.data()['Nome'],
          Tipo: e.payload.doc.data()['Tipo'],
          Dist: e.payload.doc.data()['Dist'],
          Desc: e.payload.doc.data()['Desc'],
        };
      })
      console.log(this.restaurantes);
 
    });
  }
  verCardapio(item) {
    item.CardapioNome = item.Nome;
    item.CardapioTipo = item.Tipo;
    item.CardapioEstrelas = item.Estrelas;
    item.CardapioDesc = item.Desc;
    console.log(item.CardapioNome)
  }
 
}
