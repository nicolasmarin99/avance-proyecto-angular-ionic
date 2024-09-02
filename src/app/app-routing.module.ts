import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/producto/producto.module').then(m => m.ProductoPageModule)
  },
  {
    path: 'zapatillas',
    loadChildren: () => import('./pages/zapatillas/zapatillas.module').then(m => m.ZapatillasPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },

  {
    path: 'cambiar',
    loadChildren: () => import('./pages/cambiar/cambiar.module').then( m => m.CambiarPageModule)
  },

  {
    path: 'cambiocorrecto',
    loadChildren: () => import('./pages/cambiocorrecto/cambiocorrecto.module').then( m => m.CambiocorrectoPageModule)
  },

  {
    path: 'anadirmarca',
    loadChildren: () => import('./pages/anadirmarca/anadirmarca.module').then( m => m.AnadirmarcaPageModule)
  },

  {
    path: 'agregarproducto',
    loadChildren: () => import('./pages/agregarproducto/agregarproducto.module').then( m => m.AgregarproductoPageModule)
  },
  
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundPageModule)
  },



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  
 
