import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCasePanel } from './test-case-panel';

describe('TestCasePanel', () => {
  let component: TestCasePanel;
  let fixture: ComponentFixture<TestCasePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCasePanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCasePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
