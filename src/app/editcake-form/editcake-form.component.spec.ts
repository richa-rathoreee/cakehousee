import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcakeFormComponent } from './editcake-form.component';

describe('EditcakeFormComponent', () => {
  let component: EditcakeFormComponent;
  let fixture: ComponentFixture<EditcakeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcakeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
