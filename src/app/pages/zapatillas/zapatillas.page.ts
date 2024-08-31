import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.page.html',
  styleUrls: ['./zapatillas.page.scss'],
})
export class ZapatillasPage implements OnInit {

  terminoBusqueda: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
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

  irAddproducto(){
    this.router.navigate(['/agregarproducto'])
  }

  irAddmarca(){
    this.router.navigate(['/anadirmarca'])
  }
}
