import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDescription } from './exercise-description';

describe('ExerciseDescription', () => {
  let component: ExerciseDescription;
  let fixture: ComponentFixture<ExerciseDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
