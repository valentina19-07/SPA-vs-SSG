import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BadgeAtom,
  ButtonAtom,
  ContainerAtom,
  FormFieldMolecule,
  IconAtom,
} from '@brejcha13320/design-system-bootstrap';

export interface Cliente {
  id: string;
  nombre: string;
  email: string;
  ciudad: string;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.html',
  imports: [
    CommonModule,
    FormsModule,
    ContainerAtom,
    ButtonAtom,
    BadgeAtom,
    IconAtom,
    FormFieldMolecule,
  ],
})
export class Clientes implements OnInit {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/clientes';

  clientes: Cliente[] = [];
  cargando = false;

  nuevoNombre = '';
  nuevoEmail = '';
  nuevaCiudad = '';

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.cargando = true;
    this.http.get<Cliente[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.clientes = data;
        this.cargando = false;
      },
      error: () => {
        // Datos de respaldo si el servidor no está corriendo
        this.clientes = [
          {
            id: 'c-1',
            nombre: 'Valentina González',
            email: 'valentina.gonzalez06@uceva.edu.co',
            ciudad: 'Tuluá',
          },
          {
            id: 'c-2',
            nombre: 'Carlos Andrés Pérez',
            email: 'carlos.perez@ejemplo.com',
            ciudad: 'Cali',
          },
          {
            id: 'c-3',
            nombre: 'Mariana López',
            email: 'mariana.lopez@ejemplo.com',
            ciudad: 'Bogotá',
          },
        ];
        this.cargando = false;
      },
    });
  }

  onFieldChange(campo: string, valor: string): void {
    if (campo === 'nombre') this.nuevoNombre = valor;
    if (campo === 'email') this.nuevoEmail = valor;
    if (campo === 'ciudad') this.nuevaCiudad = valor;
  }

  crearCliente(): void {
    if (!this.nuevoNombre || !this.nuevoEmail) return;

    const body = {
      nombre: this.nuevoNombre,
      email: this.nuevoEmail,
      ciudad: this.nuevaCiudad || 'No especificada',
    };

    this.http.post<Cliente>(this.apiUrl, body).subscribe({
      next: (cli) => {
        this.clientes.unshift(cli);
        this.limpiarFormulario();
      },
      error: () => {
        const nuevo: Cliente = {
          id: Date.now().toString(),
          ...body,
        };
        this.clientes.unshift(nuevo);
        this.limpiarFormulario();
      },
    });
  }

  private limpiarFormulario(): void {
    this.nuevoNombre = '';
    this.nuevoEmail = '';
    this.nuevaCiudad = '';
  }
}
