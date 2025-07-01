import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionService } from './submission.service';

describe('SubmissionService', () => {
  let component: SubmissionService;
  let fixture: ComponentFixture<SubmissionService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
