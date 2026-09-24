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

export interface Pedido {
  id: string;
  producto: string;
  cantidad: number;
  fecha: string | Date;
}

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.html',
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
export class Pedidos implements OnInit {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/pedidos';

  pedidos: Pedido[] = [];
  cargando = false;

  nuevoProducto = '';
  nuevaCantidad = 1;

  ngOnInit(): void {
    this.cargarPedidos();
  }

  cargarPedidos(): void {
    this.cargando = true;
    this.http.get<Pedido[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.pedidos = data;
        this.cargando = false;
      },
      error: () => {
        // Datos de respaldo si el backend no está disponible
        this.pedidos = [
          {
            id: 'ord-101',
            producto: 'Balón Oficial Spalding',
            cantidad: 2,
            fecha: new Date().toISOString(),
          },
          {
            id: 'ord-102',
            producto: 'Zapatillas Air Zoom',
            cantidad: 1,
            fecha: new Date(Date.now() - 86400000).toISOString(),
          },
          {
            id: 'ord-103',
            producto: 'Uniforme Completo Tuluá Basket',
            cantidad: 5,
            fecha: new Date(Date.now() - 172800000).toISOString(),
          },
        ];
        this.cargando = false;
      },
    });
  }

  onFieldChange(campo: string, valor: string): void {
    if (campo === 'producto') this.nuevoProducto = valor;
    if (campo === 'cantidad') this.nuevaCantidad = parseInt(valor, 10) || 1;
  }

  crearPedido(): void {
    if (!this.nuevoProducto) return;

    const body = {
      producto: this.nuevoProducto,
      cantidad: this.nuevaCantidad,
      fecha: new Date().toISOString(),
    };

    this.http.post<Pedido>(this.apiUrl, body).subscribe({
      next: (ped) => {
        this.pedidos.unshift(ped);
        this.limpiarFormulario();
      },
      error: () => {
        const nuevo: Pedido = {
          id: Date.now().toString(),
          ...body,
        };
        this.pedidos.unshift(nuevo);
        this.limpiarFormulario();
      },
    });
  }

  private limpiarFormulario(): void {
    this.nuevoProducto = '';
    this.nuevaCantidad = 1;
  }
}
