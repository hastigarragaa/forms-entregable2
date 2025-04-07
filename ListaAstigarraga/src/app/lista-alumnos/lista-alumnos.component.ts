import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';

interface Alumno {
  nombre: string;
  apellido: string;
  edad: number;
  aprobado: boolean;
}

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos: Alumno[] = [
    { nombre: 'Juan',   apellido: 'Pérez',    edad: 20, aprobado: true },
    { nombre: 'María',  apellido: 'González', edad: 22, aprobado: false },
    { nombre: 'Lucas',  apellido: 'Rodríguez',edad: 19, aprobado: true },
    { nombre: 'Sofía',  apellido: 'Martínez', edad: 23, aprobado: false }
  ];

  // Este array se mostrará en el template, se actualizará según los botones
  alumnosFiltrados: Alumno[] = [...this.alumnos];

  mostrarTodos(): void {
    this.alumnosFiltrados = [...this.alumnos];
  }

  mostrarAprobados(): void {
    this.alumnosFiltrados = this.alumnos.filter(a => a.aprobado);
  }

  mostrarDesaprobados(): void {
    this.alumnosFiltrados = this.alumnos.filter(a => !a.aprobado);
  }
}
