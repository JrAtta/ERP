import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueTypeComponent } from './revenue-type.component';

describe('RevenueTypeComponent', () => {
  let component: RevenueTypeComponent;
  let fixture: ComponentFixture<RevenueTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevenueTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
