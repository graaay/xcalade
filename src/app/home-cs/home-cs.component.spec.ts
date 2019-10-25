import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCsComponent } from './home-cs.component';

describe('HomeCsComponent', () => {
  let component: HomeCsComponent;
  let fixture: ComponentFixture<HomeCsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
