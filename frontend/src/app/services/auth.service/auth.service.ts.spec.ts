import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthServiceTs } from './auth.service.ts.js';

describe('AuthServiceTs', () => {
  let component: AuthServiceTs;
  let fixture: ComponentFixture<AuthServiceTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthServiceTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthServiceTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
