import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  resetForm!: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController) {}

  ngOnInit() {
    this.resetForm = this.fb.group({
      nuevaContraseña: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContraseña: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const { nuevaContraseña, confirmarContraseña } = this.resetForm.value;

    if (nuevaContraseña !== confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Actualizar contraseña en el local storage
    localStorage.setItem('contraseña', nuevaContraseña);
    alert('Contraseña actualizada exitosamente');
    this.navCtrl.navigateBack('/login');
  }
}
