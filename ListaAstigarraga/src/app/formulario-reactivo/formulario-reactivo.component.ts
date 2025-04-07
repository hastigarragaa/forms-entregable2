import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';

export function containsNumberValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value || '';
  if (!/\d/.test(value)) {
    return { noNumber: true };
  }
  return null;
}

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormularioReactivoComponent implements OnInit {
  miFormulario!: FormGroup;

  ngOnInit(): void {
    this.miFormulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        containsNumberValidator
      ])
    });
  }

  onSubmit(): void {
    if (this.miFormulario.valid) {
      console.log('✅ Formulario válido:', this.miFormulario.value);
      alert('Formulario enviado correctamente ✅');
      this.miFormulario.reset(); 
    } else {
      console.log('❌ Formulario inválido');
      this.miFormulario.markAllAsTouched(); 
    }
  }
}
