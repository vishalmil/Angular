import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshInvestmentsComponent } from './fresh-investments.component';

describe('FreshInvestmentsComponent', () => {
  let component: FreshInvestmentsComponent;
  let fixture: ComponentFixture<FreshInvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreshInvestmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreshInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
