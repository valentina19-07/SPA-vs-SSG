import { Component } from '@angular/core';
import { 
  ButtonGroupData, 
  ButtonGroupMolecule, 
  ContainerAtom, 
  FormFieldMolecule,
  InputType,
  NavLink, 
  NavLinkMolecule 
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './molecules.html',
  imports: [
    ContainerAtom,
    ButtonGroupMolecule,
    NavLinkMolecule,
    FormFieldMolecule,
  ],
})
export class Molecules {
  buttonsGroupData: ButtonGroupData[] = [
    { idButton: 'idButtonPrimary', type: 'primary', text: 'Text Primary' },
    { idButton: 'idButtonSecondary', type: 'secondary', text: 'Text Secondary' },
    { idButton: 'idButtonSuccess', type: 'success', text: 'Text Success' },
    { idButton: 'idButtonDanger', type: 'danger', text: 'Text Danger' },
    { idButton: 'idButtonWarning', type: 'warning', text: 'Text Warning' },
    { idButton: 'idButtonInfo', type: 'info', text: 'Text Info' },
    { idButton: 'idButtonLight', type: 'light', text: 'Text Light' },
    { idButton: 'idButtonDark', type: 'dark', text: 'Text Dark' },
  ];

  navLinks: NavLink[] = [
    { text: 'Link 1', url: '/atoms' },
    { text: 'Link 2', url: '/molecules' },
    { text: 'Link 3', url: '/organisms' },
  ];

  formFields: { label: string; idField: string; type: InputType; required: boolean }[] = [
    { label: 'Nombre Completo', idField: 'field-fullname', type: 'text', required: true },
    { label: 'Correo Institucional', idField: 'field-email', type: 'email', required: true },
    { label: 'Contraseña de Acceso', idField: 'field-password', type: 'password', required: true },
    { label: 'Teléfono de Contacto', idField: 'field-phone', type: 'text', required: false },
  ];

  lastValues: { [key: string]: string } = {};

  onClick(idButton: string){
    alert(`Click en el Boton de Grupo ${idButton}`);
  }

  onFormFieldChange(idField: string, value: string) {
    this.lastValues[idField] = value;
  }
}
