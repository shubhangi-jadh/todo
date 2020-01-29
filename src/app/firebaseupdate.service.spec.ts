import { TestBed } from '@angular/core/testing';

import { FirebaseupdateService } from './firebaseupdate.service';

describe('FirebaseupdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseupdateService = TestBed.get(FirebaseupdateService);
    expect(service).toBeTruthy();
  });
});
