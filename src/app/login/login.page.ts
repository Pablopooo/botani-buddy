import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup; // Añadir el operador !

  constructor(private fb: FormBuilder, private navCtrl: NavController) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { usuario, contraseña } = this.loginForm.value;
      
      // Validación simple de usuario y contraseña
      if (usuario === 'admin' && contraseña === '123456') {
        // Redirigir a otra página en caso de éxito
        this.navCtrl.navigateForward('/home');
      } else {
        // Mostrar un mensaje de error
        alert('Usuario o contraseña incorrectos');
      }
    }
  }
}

