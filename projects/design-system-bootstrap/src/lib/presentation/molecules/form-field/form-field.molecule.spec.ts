import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormFieldMolecule } from './form-field.molecule';
import { LabelAtom } from '../../atoms/label/label.atom';
import { InputAtom } from '../../atoms/input/input.atom';

describe('FormFieldMolecule', () => {
  let component: FormFieldMolecule;
  let fixture: ComponentFixture<FormFieldMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldMolecule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería pasar las propiedades label, idField y required al LabelAtom', () => {
    component.label = 'Correo electrónico';
    component.idField = 'user-email';
    component.required = true;
    fixture.detectChanges();

    const labelDebugEl = fixture.debugElement.query(By.directive(LabelAtom));
    expect(labelDebugEl).toBeTruthy();

    const labelComponent = labelDebugEl.componentInstance as LabelAtom;
    expect(labelComponent.text).toBe('Correo electrónico');
    expect(labelComponent.idFor).toBe('user-email');
    expect(labelComponent.required).toBe(true);
  });

  it('Debería pasar las propiedades idField y type al InputAtom', () => {
    component.idField = 'user-email';
    component.type = 'email';
    fixture.detectChanges();

    const inputDebugEl = fixture.debugElement.query(By.directive(InputAtom));
    expect(inputDebugEl).toBeTruthy();

    const inputComponent = inputDebugEl.componentInstance as InputAtom;
    expect(inputComponent.idInput).toBe('user-email');
    expect(inputComponent.type).toBe('email');
  });

  it('Debería emitir el evento valueChange cuando InputAtom emite un nuevo valor', () => {
    const spy = jest.spyOn(component.valueChange, 'emit');
    const inputDebugEl = fixture.debugElement.query(By.directive(InputAtom));
    const inputComponent = inputDebugEl.componentInstance as InputAtom;

    inputComponent.valueChange.emit('nuevo-valor');
    expect(spy).toHaveBeenCalledWith('nuevo-valor');
  });
});
