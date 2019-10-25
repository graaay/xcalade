import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFifaComponent } from './home-fifa.component';

describe('HomeFifaComponent', () => {
  let component: HomeFifaComponent;
  let fixture: ComponentFixture<HomeFifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
