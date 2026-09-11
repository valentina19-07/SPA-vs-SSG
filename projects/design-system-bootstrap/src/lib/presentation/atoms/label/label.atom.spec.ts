import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelAtom } from './label.atom';

describe('LabelAtom', () => {
  let component: LabelAtom;
  let fixture: ComponentFixture<LabelAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
