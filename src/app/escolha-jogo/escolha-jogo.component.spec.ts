import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaJogoComponent } from './escolha-jogo.component';

describe('EscolhaJogoComponent', () => {
  let component: EscolhaJogoComponent;
  let fixture: ComponentFixture<EscolhaJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
