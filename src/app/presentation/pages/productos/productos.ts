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

export interface Producto {
  id: string;
  nombre: string;
  precio: string | number;
  categoria: string;
  descripcion: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.html',
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
export class Productos implements OnInit {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/productos';

  productos: Producto[] = [];
  cargando = false;
  errorMensaje = '';

  nuevoNombre = '';
  nuevoPrecio = '';
  nuevaCategoria = '';
  nuevaDescripcion = '';

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando = true;
    this.errorMensaje = '';
    this.http.get<Producto[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
      },
      error: () => {
        // Datos de respaldo si el backend no está disponible
        this.productos = [
          {
            id: 'p-1',
            nombre: 'Balón de Baloncesto Pro',
            precio: '49.99',
            categoria: 'Deportes',
            descripcion: 'Balón oficial de cuero sintético para duela y asfalto.',
          },
          {
            id: 'p-2',
            nombre: 'Zapatillas Alta Amortiguación',
            precio: '129.50',
            categoria: 'Calzado',
            descripcion: 'Diseñadas para maximizar el salto y la tracción.',
          },
          {
            id: 'p-3',
            nombre: 'Camiseta de Juego Transpirable',
            precio: '35.00',
            categoria: 'Ropa',
            descripcion: 'Tela dry-fit con ventilación estratégica.',
          },
        ];
        this.cargando = false;
      },
    });
  }

  onFieldChange(campo: string, valor: string): void {
    if (campo === 'nombre') this.nuevoNombre = valor;
    if (campo === 'precio') this.nuevoPrecio = valor;
    if (campo === 'categoria') this.nuevaCategoria = valor;
    if (campo === 'descripcion') this.nuevaDescripcion = valor;
  }

  crearProducto(): void {
    if (!this.nuevoNombre) return;

    const body = {
      nombre: this.nuevoNombre,
      precio: this.nuevoPrecio || '10.00',
      categoria: this.nuevaCategoria || 'General',
      descripcion: this.nuevaDescripcion || 'Sin descripción',
    };

    this.http.post<Producto>(this.apiUrl, body).subscribe({
      next: (prod) => {
        this.productos.unshift(prod);
        this.limpiarFormulario();
      },
      error: () => {
        const nuevo: Producto = {
          id: Date.now().toString(),
          ...body,
        };
        this.productos.unshift(nuevo);
        this.limpiarFormulario();
      },
    });
  }

  private limpiarFormulario(): void {
    this.nuevoNombre = '';
    this.nuevoPrecio = '';
    this.nuevaCategoria = '';
    this.nuevaDescripcion = '';
  }
}
