import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantasPage } from './plantas.page';

describe('PlantasPage', () => {
  let component: PlantasPage;
  let fixture: ComponentFixture<PlantasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
