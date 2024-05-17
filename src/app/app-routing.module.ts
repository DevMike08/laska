import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', 
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
   },
  { 
    path: 'sigin', 
    loadChildren: () => import('./sigin/sigin.module').then(m => m.SiginModule) 
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
