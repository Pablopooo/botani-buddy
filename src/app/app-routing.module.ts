import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NoAuthGuard } from './no-auth.guard';
import { HomePageModule } from './home/home.module';
import { AnadirPageModule } from './anadir/anadir.module';
import { PlantasPageModule } from './plantas/plantas.module';
import { AyudasPageModule } from './ayudas/ayudas.module';
import { LoginPageModule } from './login/login.module';
import { NotFoundPageModule } from './not-found/not-found.module';
import { PlantDetailsPageModule } from './plant-details/plant-details.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard] },
  { path: 'anadir', loadChildren: () => import('./anadir/anadir.module').then(m => m.AnadirPageModule) },
  { path: 'plantas', loadChildren: () => import('./plantas/plantas.module').then(m => m.PlantasPageModule) },
  { path: 'ayudas', loadChildren: () => import('./ayudas/ayudas.module').then(m => m.AyudasPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule), canActivate: [NoAuthGuard] },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundPageModule) },
  { path: 'plant-details/:id', loadChildren: () => import('./plant-details/plant-details.module').then(m => m.PlantDetailsPageModule) },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
