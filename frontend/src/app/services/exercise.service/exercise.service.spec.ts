import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseService } from './exercise.service';

describe('ExerciseService', () => {
  let component: ExerciseService;
  let fixture: ComponentFixture<ExerciseService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
