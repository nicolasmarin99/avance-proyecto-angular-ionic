import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-zapatillasuser',
  templateUrl: './zapatillasuser.page.html',
  styleUrls: ['./zapatillasuser.page.scss'],
})
export class ZapatillasuserPage implements OnInit {

  terminoBusqueda: string = "";
  usuario:string=""

  constructor(private router:Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params => {
      this.usuario= params['usuario'] || 'No se ha registrado ningún email';
    });
  }

  irProducto() {
    this.router.navigate(['/producto'])
  }
  irInicio() {
    this.router.navigate(['/inicio'])
  }

  irLogin() {
    this.router.navigate(['/login']);
  }

}
