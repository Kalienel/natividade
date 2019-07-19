import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NavtabPage } from './navtab.page';

const routes: Routes = [
  {
    path: 'navtab',
    component: NavtabPage,
    children:[
      { path: 'estabelecimentos', loadChildren: '../pages/estabelecimentos/estabelecimentos.module#EstabelecimentosPageModule' },
      { path: 'cardapio/:item', loadChildren: '../pages/cardapio/cardapio.module#CardapioPageModule' },
      { path: 'comprar', loadChildren: '../pages/comprar/comprar.module#ComprarPageModule' },
      { path: 'confirmada', loadChildren: '../pages/confirmada/confirmada.module#ConfirmadaPageModule' },
      { path: 'carrinho', loadChildren: '../pages/carrinho/carrinho.module#CarrinhoPageModule' },
      { path: 'investimento', loadChildren: '../pages/investimento/investimento.module#InvestimentoPageModule' }
    ]
  },
  {
    path:'',
    redirectTo:'/navtab/estabelecimentos',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NavtabPage]
})
export class NavtabPageModule {}
