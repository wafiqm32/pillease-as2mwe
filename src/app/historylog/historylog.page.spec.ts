import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorylogPage } from './historylog.page';

describe('HistorylogPage', () => {
  let component: HistorylogPage;
  let fixture: ComponentFixture<HistorylogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorylogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
