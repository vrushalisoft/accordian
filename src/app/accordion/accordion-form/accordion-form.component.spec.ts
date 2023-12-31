import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionFormComponent } from './accordion-form.component';

describe('AccordionFormComponent', () => {
  let component: AccordionFormComponent;
  let fixture: ComponentFixture<AccordionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
