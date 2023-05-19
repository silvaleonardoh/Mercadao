import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEstatisticasComponent } from './pagina-estatisticas.component';

describe('PaginaEstatisticasComponent', () => {
  let component: PaginaEstatisticasComponent;
  let fixture: ComponentFixture<PaginaEstatisticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaEstatisticasComponent]
    });
    fixture = TestBed.createComponent(PaginaEstatisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
