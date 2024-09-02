import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-anadirmarca',
  templateUrl: './anadirmarca.page.html',
  styleUrls: ['./anadirmarca.page.scss'],
})
export class AnadirmarcaPage implements OnInit {

  marca: string = ''; // Variable para almacenar la marca ingresada
  marcas: string[] = []; // Lista para almacenar las marcas
  usuario:string=""

  constructor(private router:Router) { 
  }

  ngOnInit() {}

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

  addMarca(){
    if (this.marca.trim() !== '') { // Verifica que el input no esté vacío
      this.marcas.push(this.marca); // Agrega la marca a la lista
      this.marca = ''; // Limpia el input después de añadir la marca
   }
 } 

 eliminarMarca(index: number) {
  this.marcas.splice(index, 1); // Elimina la marca en la posición indicada
}


}
