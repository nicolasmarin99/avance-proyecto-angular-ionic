import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar',
  templateUrl: './cambiar.page.html',
  styleUrls: ['./cambiar.page.scss'],
})
export class CambiarPage implements OnInit {

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

<<<<<<< HEAD
  irConfirmacion(){
    this.router.navigate(['/confirmacioncambiar'])
  }
=======
>>>>>>> ce5bca60ca11d3288addc572f1d0f10bd83121a0

}
