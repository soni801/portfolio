import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchematicLookupComponent } from './schematic-lookup.component';

describe('SchematicLookupComponent', () => {
  let component: SchematicLookupComponent;
  let fixture: ComponentFixture<SchematicLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchematicLookupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchematicLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
