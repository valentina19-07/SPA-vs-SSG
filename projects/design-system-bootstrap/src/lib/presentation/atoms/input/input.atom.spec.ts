import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputAtom } from './input.atom';

describe('InputAtom', () => {
  let component: InputAtom;
  let fixture: ComponentFixture<InputAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAtom],
    }).compileComponents();

    fixture = TestBed.createComponent(InputAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería asignar el idInput y type correspondientes', () => {
    component.idInput = 'email-field';
    component.type = 'email';
    component.placeholder = 'correo@ejemplo.com';
    fixture.detectChanges();

    const inputEl = fixture.debugElement.query(By.css('input'));
    expect(inputEl.nativeElement.id).toBe('email-field');
    expect(inputEl.nativeElement.type).toBe('email');
    expect(inputEl.nativeElement.placeholder).toBe('correo@ejemplo.com');
  });

  it('Debería emitir valueChange al escribir', () => {
    const spy = jest.spyOn(component.valueChange, 'emit');
    const inputEl = fixture.debugElement.query(By.css('input'));

    inputEl.nativeElement.value = 'nuevo texto';
    inputEl.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith('nuevo texto');
    expect(component.value).toBe('nuevo texto');
  });
});
