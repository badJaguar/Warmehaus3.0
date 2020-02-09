import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cab14WComponent } from './cab14-w.component';

describe('Cab14WComponent', () => {
  let component: Cab14WComponent;
  let fixture: ComponentFixture<Cab14WComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cab14WComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cab14WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
