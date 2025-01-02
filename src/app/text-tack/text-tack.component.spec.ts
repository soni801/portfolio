import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTackComponent } from './text-tack.component';

describe('TextTackComponent', () => {
  let component: TextTackComponent;
  let fixture: ComponentFixture<TextTackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextTackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
