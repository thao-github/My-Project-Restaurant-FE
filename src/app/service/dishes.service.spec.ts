import { TestBed } from '@angular/core/testing';

import { DishesService } from './dishes.service';

describe('ProductService', () => {
  let service: DishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
