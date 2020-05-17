import { TestBed } from '@angular/core/testing';

import { EmotionReckonService } from './emotion-reckon.service';

describe('EmotionReckonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmotionReckonServiceService = TestBed.get(EmotionReckonServiceService);
    expect(service).toBeTruthy();
  });
});
