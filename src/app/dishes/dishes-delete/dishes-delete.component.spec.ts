import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesDeleteComponent } from './dishes-delete.component';

describe('DishesDeleteComponent', () => {
  let component: DishesDeleteComponent;
  let fixture: ComponentFixture<DishesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
