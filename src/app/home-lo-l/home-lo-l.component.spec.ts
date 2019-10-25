import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoLComponent } from './home-lo-l.component';

describe('HomeLoLComponent', () => {
  let component: HomeLoLComponent;
  let fixture: ComponentFixture<HomeLoLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
