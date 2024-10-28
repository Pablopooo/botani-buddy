import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlarmasPage } from './alarmas.page';

describe('AlarmasPage', () => {
  let component: AlarmasPage;
  let fixture: ComponentFixture<AlarmasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
