import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  passwordPattern: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  email:string=""
  contrasena:string=""

  emailuser:string="nico@gmail.com"
  contrasenauser:string="Password1"
  usuariouser:string="nicolas99"

  emailadmin:string="admin@gmail.com"
  contrasenaadmin:string="Password1"
  usuarioadmin:string="jorge"

  constructor(private router:Router,private alertcontroller: AlertController ) { }

  ngOnInit() {
  }

  validacion(){
    if(!this.email.includes("@")){
      const titulo="email no valido"
      const mensaje="por favor ingrese email valido"
      this.alertaLogin(titulo,mensaje);
      return
    }

    if (!this.passwordPattern.test(this.contrasena)) {
      const titulo = "Contraseña no válida";
      const mensaje = "La contraseña debe tener al menos 8 caracteres, incluir letras, números y al menos una letra mayúscula.";
      this.alertaLogin(titulo, mensaje);
      return;
    }


    if (this.email==this.emailuser && this.contrasena==this.contrasenauser){
      this.router.navigate(['/zapatillasuser'],{
        queryParams:{usuario:this.usuariouser}
      });

    }else if (this.email == this.emailadmin && this.contrasena==this.contrasenaadmin){
      this.router.navigate(['/zapatillas'],{
        queryParams:{usuario:this.usuarioadmin}
      });
    
    }else{
      const titulo = "datos incorrectos"
      const mensaje ="ingrese datos validos"
      this.alertaLogin(titulo,mensaje);
    }

    

  
  }

  async alertaLogin(titulo:string , mensaje: string){
    const alert = await this.alertcontroller.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  irInicio(){
    this.router.navigate(['/inicio'])
  }

  irZapatillas(){
    this.router.navigate(['/zapatillas'])
  }

  irRegistro(){
    this.router.navigate(['/registro'])
  }

  irRecuperar(){
    this.router.navigate(['/recuperar'])
  }

}
