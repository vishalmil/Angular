import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMyInvestmentComponent } from './find-my-investment.component';

describe('FindMyInvestmentComponent', () => {
  let component: FindMyInvestmentComponent;
  let fixture: ComponentFixture<FindMyInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindMyInvestmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindMyInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
