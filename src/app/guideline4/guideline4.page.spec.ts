import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Guideline4Page } from './guideline4.page';

describe('Guideline4Page', () => {
  let component: Guideline4Page;
  let fixture: ComponentFixture<Guideline4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Guideline4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
