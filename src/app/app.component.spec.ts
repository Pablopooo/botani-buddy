import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Declara el componente a probar
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite el uso de elementos personalizados en las pruebas
      imports: [RouterModule.forRoot([])], // Importa el módulo de enrutamiento con una configuración vacía
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente
    const app = fixture.componentInstance; // Obtiene la instancia del componente
    expect(app).toBeTruthy(); // Verifica que el componente se creó correctamente
  });

  // TODO: Fix the flaky test.
  xit('should have menu labels', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Aplica cambios en la detección de datos
    const app = fixture.nativeElement; 
    const menuItems = app.querySelectorAll('ion-label'); // Selecciona todos los elementos 'ion-label'
    expect(menuItems.length).toEqual(12); // Verifica que hay 12 etiquetas en el menú
    expect(menuItems[0].textContent).toContain('Inbox'); // Verifica el contenido del primer ítem
    expect(menuItems[1].textContent).toContain('Outbox'); // Verifica el contenido del segundo ítem
  });

  it('should have urls', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Aplica cambios en la detección de datos
    const app = fixture.nativeElement; 
    const menuItems = app.querySelectorAll('ion-item'); // Selecciona todos los elementos 'ion-item'
    expect(menuItems.length).toEqual(12); // Verifica que hay 12 ítems en el menú
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/folder/inbox'); // Verifica el enlace del primer ítem
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/folder/outbox'); // Verifica el enlace del segundo ítem
  });
});
