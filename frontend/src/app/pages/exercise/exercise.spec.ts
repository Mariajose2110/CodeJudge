import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excersice } from './excersice';

describe('Excersice', () => {
  let component: Excersice;
  let fixture: ComponentFixture<Excersice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Excersice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Excersice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
