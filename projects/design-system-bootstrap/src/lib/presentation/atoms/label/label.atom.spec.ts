import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_LABEL_ID_FOR, MOCK_LABEL_TEXT } from '../../../mocks/label.mocks';
import { LabelAtom } from './label.atom';

describe('LabelAtom', () => {
  let component: LabelAtom;
  let fixture: ComponentFixture<LabelAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelAtom],
    }).compileComponents();

    fixture = TestBed.createComponent(LabelAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería mostrar el texto del label', () => {
    component.text = MOCK_LABEL_TEXT;
    fixture.detectChanges();
    const labelEl = fixture.debugElement.query(By.css('label'));
    expect(labelEl.nativeElement.textContent).toContain(MOCK_LABEL_TEXT);
  });

  it('Debería asignar el atributo for correspondiente a idFor', () => {
    component.idFor = MOCK_LABEL_ID_FOR;
    fixture.detectChanges();
    const labelEl = fixture.debugElement.query(By.css('label'));
    expect(labelEl.nativeElement.getAttribute('for')).toBe(MOCK_LABEL_ID_FOR);
  });

  it('Debería mostrar el asterisco cuando required es true', () => {
    component.required = true;
    fixture.detectChanges();
    const asterisk = fixture.debugElement.query(By.css('.text-danger'));
    expect(asterisk).not.toBeNull();
    expect(asterisk.nativeElement.textContent).toContain('*');
  });

  it('No debería mostrar el asterisco cuando required es false', () => {
    component.required = false;
    fixture.detectChanges();
    const asterisk = fixture.debugElement.query(By.css('.text-danger'));
    expect(asterisk).toBeNull();
  });
});
