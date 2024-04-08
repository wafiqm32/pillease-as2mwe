import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LansoprazolePage } from './lansoprazole.page';

describe('LansoprazolePage', () => {
  let component: LansoprazolePage;
  let fixture: ComponentFixture<LansoprazolePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LansoprazolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
