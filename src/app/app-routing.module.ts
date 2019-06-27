import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'estabelecimentos', loadChildren: './pages/estabelecimentos/estabelecimentos.module#EstabelecimentosPageModule' },
  { path: 'cardapio', loadChildren: './pages/cardapio/cardapio.module#CardapioPageModule' },
  { path: 'comprar', loadChildren: './page/comprar/comprar.module#ComprarPageModule' },
  { path: 'comprar', loadChildren: './pages/comprar/comprar.module#ComprarPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
