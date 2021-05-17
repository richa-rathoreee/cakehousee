import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCakesComponent } from './search-cakes.component';

describe('SearchCakesComponent', () => {
  let component: SearchCakesComponent;
  let fixture: ComponentFixture<SearchCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
