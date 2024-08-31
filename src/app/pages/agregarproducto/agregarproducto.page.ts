import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.page.html',
  styleUrls: ['./agregarproducto.page.scss'],
})
export class AgregarproductoPage implements OnInit {

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

  irConfirmacion(){
    this.router.navigate(['/confirmacioncambiar'])
  }


}
