import { TestBed } from '@angular/core/testing';

import { ConsultArticlesService } from './consult-articles.service';

describe('ConsultArticlesService', () => {
  let service: ConsultArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
