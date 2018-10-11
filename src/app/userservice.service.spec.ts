import { TestBed } from '@angular/core/testing';

import { UserserviceService } from './userservice.service';

describe('UserserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserserviceService = TestBed.get(UserserviceService);
    expect(service).toBeTruthy();
  });

  it('should have only 2 active users', () => {
    const service: UserserviceService = TestBed.get(UserserviceService);
    expect(service.getUsers().length).toEqual(1);
  });

});
