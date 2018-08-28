import { TestBed, inject } from '@angular/core/testing';

import { QuartoService } from './quarto.service';

describe('QuartoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuartoService]
    });
  });

  it('should be created', inject([QuartoService], (service: QuartoService) => {
    expect(service).toBeTruthy();
  }));
});
