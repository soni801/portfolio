import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecalSocialComponent } from './recal-social.component';

describe('RecalSocialComponent', () => {
  let component: RecalSocialComponent;
  let fixture: ComponentFixture<RecalSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecalSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecalSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
