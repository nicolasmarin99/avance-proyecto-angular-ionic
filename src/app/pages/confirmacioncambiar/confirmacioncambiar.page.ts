import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacioncambiar',
  templateUrl: './confirmacioncambiar.page.html',
  styleUrls: ['./confirmacioncambiar.page.scss'],
})
export class ConfirmacioncambiarPage implements OnInit {

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
