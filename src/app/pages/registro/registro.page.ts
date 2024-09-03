import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  async validarFormulario(form: any) {
    if (form.valid && form.value.contrasena === form.value.confirmarContrasena) {
      console.log('Formulario válido:', form.value);
      // Muestra alerta de éxito
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Registro exitoso. Serás redirigido al inicio de sesión.',
        buttons: ['OK']
      });

      await alert.present();
      await alert.onDidDismiss();
      
      // Redirige a la página de login
      this.router.navigate(['/login']);
    } else {
      // Muestra alerta de error
      const alert = await this.alertController.create({
        header: 'No se ha completado el registro',
        message: 'No se puede realizar el registro. Por favor, revise los datos ingresados.',
        buttons: ['OK']
      });

      await alert.present();
      await alert.onDidDismiss();

      if (form.value.contrasena !== form.value.confirmarContrasena) {
        console.log('Las contraseñas no coinciden');
      }
    }
  }

  irInicio() {
    this.router.navigate(['/inicio']);
  }

  irZapatillas() {
    this.router.navigate(['/zapatillas']);
  }

  irLogin() {
    this.router.navigate(['/login']);
  }
}