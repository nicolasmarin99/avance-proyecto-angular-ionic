import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiocorrecto',
  templateUrl: './cambiocorrecto.page.html',
  styleUrls: ['./cambiocorrecto.page.scss'],
})
export class CambiocorrectoPage implements OnInit {

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
