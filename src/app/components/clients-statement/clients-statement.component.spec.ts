import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsStatementComponent } from './clients-statement.component';

describe('ClientsStatementComponent', () => {
  let component: ClientsStatementComponent;
  let fixture: ComponentFixture<ClientsStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
