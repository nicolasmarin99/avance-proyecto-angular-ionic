import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

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

  irCambiar(){
<<<<<<< HEAD
    this.router.navigate(['/cambiar'])
=======
    this.router.navigate(['/cambiar']);
>>>>>>> ce5bca60ca11d3288addc572f1d0f10bd83121a0
  }

}
