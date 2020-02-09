import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cab20WComponent } from './cab20-w.component';

describe('Cab20WComponent', () => {
  let component: Cab20WComponent;
  let fixture: ComponentFixture<Cab20WComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cab20WComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cab20WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
