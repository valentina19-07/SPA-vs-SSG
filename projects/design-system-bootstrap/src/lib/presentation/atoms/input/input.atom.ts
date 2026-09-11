import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType } from '../../../core/interfaces/core.interface';

/**
 * Input atómico del Design System.
 *
 * @description
 * Representa un campo de entrada de texto reutilizable basado en Bootstrap.
 * Emite un evento cada vez que cambia su valor.
 */
@Component({
  selector: 'dsb-input-atom',
  template: `
    <input
      [id]="idInput"
      [type]="type"
      class="form-control"
      [placeholder]="placeholder"
      [value]="value"
      (input)="onInput($event)"
    />
  `,
})
export class InputAtom {
  /** Identificador único del input */
  @Input() idInput: string = '';

  /** Tipo de campo de entrada */
  @Input() type: InputType = 'text';

  /** Texto de marcador de posición (placeholder) */
  @Input() placeholder: string = '';

  /** Valor actual del campo */
  @Input() value: string = '';

  /**
   * Evento emitido cuando el usuario escribe en el input.
   * @emits string Valor actual del input
   */
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Captura el evento de entrada y emite el nuevo valor.
   *
   * @param event Evento de input del DOM
   */
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target?.value ?? '';
    this.valueChange.emit(this.value);
  }
}
