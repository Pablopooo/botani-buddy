import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'anadir',
    loadChildren: () => import('./anadir/anadir.module').then( m => m.AnadirPageModule)
  },  {
    path: 'plantas',
    loadChildren: () => import('./plantas/plantas.module').then( m => m.PlantasPageModule)
  },
  {
    path: 'ayudas',
    loadChildren: () => import('./ayudas/ayudas.module').then( m => m.AyudasPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
