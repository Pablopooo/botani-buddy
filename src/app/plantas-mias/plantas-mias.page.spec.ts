import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantasMiasPage } from './plantas-mias.page';

describe('PlantasMiasPage', () => {
  let component: PlantasMiasPage;
  let fixture: ComponentFixture<PlantasMiasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasMiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
