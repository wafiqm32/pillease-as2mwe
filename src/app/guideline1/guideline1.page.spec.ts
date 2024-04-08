import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Guideline1Page } from './guideline1.page';

describe('Guideline1Page', () => {
  let component: Guideline1Page;
  let fixture: ComponentFixture<Guideline1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Guideline1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
