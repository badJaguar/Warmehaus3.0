import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesSheetComponent } from './phones-sheet.component';

describe('PhonesSheetComponent', () => {
  let component: PhonesSheetComponent;
  let fixture: ComponentFixture<PhonesSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonesSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
