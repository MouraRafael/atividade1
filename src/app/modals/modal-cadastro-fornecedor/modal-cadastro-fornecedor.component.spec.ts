import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCadastroFornecedorComponent } from './modal-cadastro-fornecedor.component';

describe('ModalCadastroFornecedorComponent', () => {
  let component: ModalCadastroFornecedorComponent;
  let fixture: ComponentFixture<ModalCadastroFornecedorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCadastroFornecedorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCadastroFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
