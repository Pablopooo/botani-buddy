import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AyudasPage } from './ayudas.page';

describe('AyudasPage', () => {
  let component: AyudasPage;
  let fixture: ComponentFixture<AyudasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
