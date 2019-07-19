import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './navtab/navtab.module#NavtabPageModule' },
  /*{ path: '', loadChildren: './pages/estabelecimentos/estabelecimentos.module#EstabelecimentosPageModule' },
  { path: 'estabelecimentos', loadChildren: './pages/estabelecimentos/estabelecimentos.module#EstabelecimentosPageModule' },
  { path: 'cardapio/:item', loadChildren: './pages/cardapio/cardapio.module#CardapioPageModule' },
  { path: 'comprar', loadChildren: './pages/comprar/comprar.module#ComprarPageModule' },
  { path: 'confirmada', loadChildren: './pages/confirmada/confirmada.module#ConfirmadaPageModule' },
  { path: 'carrinho', loadChildren: './pages/carrinho/carrinho.module#CarrinhoPageModule' },
  { path: 'investimento', loadChildren: './pages/investimento/investimento.module#InvestimentoPageModule' }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
