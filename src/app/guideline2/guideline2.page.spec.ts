import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Guideline2Page } from './guideline2.page';

describe('Guideline2Page', () => {
  let component: Guideline2Page;
  let fixture: ComponentFixture<Guideline2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Guideline2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
