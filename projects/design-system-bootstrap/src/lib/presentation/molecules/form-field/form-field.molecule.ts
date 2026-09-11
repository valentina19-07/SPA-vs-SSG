import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabelAtom } from '../../atoms/label/label.atom';
import { InputAtom } from '../../atoms/input/input.atom';
import { InputType } from '../../../core/interfaces/core.interface';

/**
 * Campo de formulario del Design System.
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Combina `LabelAtom` e `InputAtom` para formar un campo de formulario completo.
 */
@Component({
  selector: 'dsb-form-field-molecule',
  templateUrl: './form-field.molecule.html',
  imports: [LabelAtom, InputAtom],
})
export class FormFieldMolecule {
  /** Texto del label */
  @Input() label: string = '';

  /** Id compartido entre el label y el input */
  @Input() idField: string = '';

  /** Tipo del input interno */
  @Input() type: InputType = 'text';

  /** Indica si el campo es obligatorio */
  @Input() required: boolean = false;

  /**
   * Evento emitido cuando cambia el valor del input interno.
   * @emits string Valor actual del campo
   */
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
}
