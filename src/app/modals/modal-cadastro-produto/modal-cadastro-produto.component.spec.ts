import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCadastroProdutoComponent } from './modal-cadastro-produto.component';

describe('ModalCadastroProdutoComponent', () => {
  let component: ModalCadastroProdutoComponent;
  let fixture: ComponentFixture<ModalCadastroProdutoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCadastroProdutoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCadastroProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
