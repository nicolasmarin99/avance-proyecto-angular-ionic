import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadirmarca',
  templateUrl: './anadirmarca.page.html',
  styleUrls: ['./anadirmarca.page.scss'],
})
export class AnadirmarcaPage implements OnInit {

  nombreProducto: string = '';
  listaMarcas: string[] = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  irInicio(){
    this.router.navigate(['/inicio'])
  }

  irZapatillas(){
    this.router.navigate(['/zapatillas'])
  }

  irLogin(){
    this.router.navigate(['/login']);
  }

}
