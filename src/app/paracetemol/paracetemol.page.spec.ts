import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParacetemolPage } from './paracetemol.page';

describe('ParacetemolPage', () => {
  let component: ParacetemolPage;
  let fixture: ComponentFixture<ParacetemolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParacetemolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
