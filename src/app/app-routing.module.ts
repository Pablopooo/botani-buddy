import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate:[AuthGuard] },
  { path: 'anadir', loadChildren: () => import('./anadir/anadir.module').then(m => m.AnadirPageModule), canActivate:[AuthGuard] },
  { path: 'plantas', loadChildren: () => import('./plantas/plantas.module').then(m => m.PlantasPageModule), canActivate:[AuthGuard] },
  { path: 'ayudas', loadChildren: () => import('./ayudas/ayudas.module').then(m => m.AyudasPageModule), canActivate:[AuthGuard] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)},
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundPageModule), canActivate:[AuthGuard] },
  { path: 'plant-details/:id', loadChildren: () => import('./plant-details/plant-details.module').then(m => m.PlantDetailsPageModule), canActivate:[AuthGuard] },
  { path: 'plantas-mias/:id', loadChildren: () => import('./plantas-mias/plantas-mias.module').then(m => m.PlantasMiasPageModule), canActivate:[AuthGuard] },
  { path: 'alarmas', loadChildren: () => import('./alarmas/alarmas.module').then(m => m.AlarmasPageModule), canActivate:[AuthGuard] },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
