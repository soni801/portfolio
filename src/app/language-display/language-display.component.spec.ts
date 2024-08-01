import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDisplayComponent } from './language-display.component';

describe('LanguageDisplayComponent', () => {
  let component: LanguageDisplayComponent;
  let fixture: ComponentFixture<LanguageDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
