import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersmanagementComponent } from './usersmanagement.component';

describe('UsersmanagementComponent', () => {
  let component: UsersmanagementComponent;
  let fixture: ComponentFixture<UsersmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
