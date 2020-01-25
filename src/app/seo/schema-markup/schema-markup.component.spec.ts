import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaMarkupComponent } from './schema-markup.component';

describe('SchemaMarkupComponent', () => {
  let component: SchemaMarkupComponent;
  let fixture: ComponentFixture<SchemaMarkupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaMarkupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaMarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
