import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantDetailsPage } from './plant-details.page';

describe('PlantDetailsPage', () => {
  let component: PlantDetailsPage;
  let fixture: ComponentFixture<PlantDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
