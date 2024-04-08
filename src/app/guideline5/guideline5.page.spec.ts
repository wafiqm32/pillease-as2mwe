import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Guideline5Page } from './guideline5.page';

describe('Guideline5Page', () => {
  let component: Guideline5Page;
  let fixture: ComponentFixture<Guideline5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Guideline5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
