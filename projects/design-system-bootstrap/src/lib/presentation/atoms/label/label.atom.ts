import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Label atómico del Design System.
 *
 * @description
 * Representa una etiqueta de texto reutilizable para formularios,
 * con indicador visual opcional de campo requerido.
 */
@Component({
  selector: 'dsb-label-atom',
  imports: [CommonModule],
  template: `
    <label [for]="idFor" class="form-label">
      {{ text }}<span *ngIf="required" class="text-danger"> *</span>
    </label>
  `,
})
export class LabelAtom {
  /** Texto visible del label */
  @Input() text: string = '';

  /** Id del elemento al que apunta el label (atributo for) */
  @Input() idFor: string = '';

  /** Indica si el campo asociado es obligatorio */
  @Input() required: boolean = false;
}
