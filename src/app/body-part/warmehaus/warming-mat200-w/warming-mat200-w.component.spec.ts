import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmingMat200WComponent } from './warming-mat200-w.component';

describe('WarmingMat200WComponent', () => {
  let component: WarmingMat200WComponent;
  let fixture: ComponentFixture<WarmingMat200WComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmingMat200WComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmingMat200WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
