import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  BadgeAtom,
  BadgeType,
  BadgeTypeText,
  ButtonAtom,
  ButtonType,
  ContainerAtom,
  IconAtom,
  InputAtom,
  InputType,
  LabelAtom,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './atoms.html',
  imports: [
    BadgeAtom,
    ButtonAtom,
    IconAtom,
    ContainerAtom,
    LabelAtom,
    InputAtom,
    CommonModule,
  ],
})
export class Atoms {
  badges: { type: BadgeType, typeText: BadgeTypeText}[] = [
    { type: 'primary', typeText: 'text-white' },
    { type: 'secondary', typeText: 'text-white' },
    { type: 'success', typeText: 'text-white' },
    { type: 'danger', typeText: 'text-white' },
    { type: 'warning', typeText: 'text-dark' },
    { type: 'info', typeText: 'text-dark' },
    { type: 'light', typeText: 'text-dark' },
    { type: 'dark', typeText: 'text-white' },
  ];

  buttons: { type: ButtonType, idButton: string}[] = [
    { type: 'primary', idButton: 'idButttonPrimary' },
    { type: 'secondary', idButton: 'idButttonSecondary' },
    { type: 'success', idButton: 'idButttonSuccess' },
    { type: 'danger', idButton: 'idButttonDanger' },
    { type: 'warning', idButton: 'idButttonWarning' },
    { type: 'info', idButton: 'idButttonInfo' },
    { type: 'light', idButton: 'idButttonLight' },
    { type: 'dark', idButton: 'idButttonDark' },
  ];

  icons: { name: string, size: number }[] = [
    { name: 'bootstrap', size: 1 },
    { name: 'apple', size: 2 },
    { name: 'bell', size: 3 },
    { name: 'android', size: 4 },
    { name: 'ban', size: 5 },
  ];

  labels: { text: string; idFor: string; required: boolean }[] = [
    { text: 'Nombre de usuario', idFor: 'user', required: true },
    { text: 'Correo electrónico', idFor: 'email', required: true },
    { text: 'Teléfono (opcional)', idFor: 'phone', required: false },
    { text: 'Comentarios adicionales', idFor: 'comments', required: false },
  ];

  inputs: { idInput: string; type: InputType; placeholder: string }[] = [
    { idInput: 'input-text', type: 'text', placeholder: 'Ingrese texto...' },
    { idInput: 'input-email', type: 'email', placeholder: 'correo@ejemplo.com' },
    { idInput: 'input-password', type: 'password', placeholder: 'Contraseña secreta' },
    { idInput: 'input-number', type: 'number', placeholder: '12345' },
  ];

  onClick(idButton: string){
    alert(`Click en el Boton ${idButton}`);
  }

  onInputChange(id: string, value: string) {
    console.log(`Input ${id} cambió a:`, value);
  }
}