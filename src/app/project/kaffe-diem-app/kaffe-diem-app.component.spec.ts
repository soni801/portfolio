import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaffeDiemAppComponent } from './kaffe-diem-app.component';

describe('KaffeDiemAppComponent', () => {
  let component: KaffeDiemAppComponent;
  let fixture: ComponentFixture<KaffeDiemAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KaffeDiemAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaffeDiemAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
