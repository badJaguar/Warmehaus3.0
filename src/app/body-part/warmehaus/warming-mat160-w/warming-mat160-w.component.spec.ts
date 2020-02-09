import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmingMat160WComponent } from './warming-mat160-w.component';

describe('WarmingMat160WComponent', () => {
  let component: WarmingMat160WComponent;
  let fixture: ComponentFixture<WarmingMat160WComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmingMat160WComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmingMat160WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
