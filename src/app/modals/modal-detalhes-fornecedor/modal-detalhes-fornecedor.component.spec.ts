import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDetalhesFornecedorComponent } from './modal-detalhes-fornecedor.component';

describe('ModalDetalhesFornecedorComponent', () => {
  let component: ModalDetalhesFornecedorComponent;
  let fixture: ComponentFixture<ModalDetalhesFornecedorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetalhesFornecedorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDetalhesFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
