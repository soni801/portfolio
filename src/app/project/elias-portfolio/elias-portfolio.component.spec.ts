import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliasPortfolioComponent } from './elias-portfolio.component';

describe('EliasPortfolioComponent', () => {
  let component: EliasPortfolioComponent;
  let fixture: ComponentFixture<EliasPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliasPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliasPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
