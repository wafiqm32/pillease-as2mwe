import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Guideline3Page } from './guideline3.page';

describe('Guideline3Page', () => {
  let component: Guideline3Page;
  let fixture: ComponentFixture<Guideline3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Guideline3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
