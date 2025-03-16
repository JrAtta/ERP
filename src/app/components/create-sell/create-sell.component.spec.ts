import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSellComponent } from './create-sell.component';

describe('CreateSellComponent', () => {
  let component: CreateSellComponent;
  let fixture: ComponentFixture<CreateSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
