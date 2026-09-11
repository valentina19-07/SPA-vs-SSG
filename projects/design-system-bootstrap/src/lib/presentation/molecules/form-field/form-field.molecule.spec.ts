import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldMolecule } from './form-field.molecule';

describe('FormFieldMolecule', () => {
  let component: FormFieldMolecule;
  let fixture: ComponentFixture<FormFieldMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
