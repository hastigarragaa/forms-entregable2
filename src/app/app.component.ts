import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ListaAlumnosComponent,
    FormularioReactivoComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario y Lista de Alumnos';
}
