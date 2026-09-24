import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarConfig, NavbarOrganism } from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    NavbarOrganism,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  navbarConfig: NavbarConfig = {
    title: 'Taller Sistema de Diseño',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Átomos', url: '/atoms' },
      { text: 'Moléculas', url: '/molecules' },
      { text: 'Organismos', url: '/organisms' },
      { text: 'Productos', url: '/productos' },
      { text: 'Clientes', url: '/clientes' },
      { text: 'Pedidos', url: '/pedidos' },
    ]
  }
}