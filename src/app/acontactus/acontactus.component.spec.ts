import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcontactusComponent } from './acontactus.component';

describe('AcontactusComponent', () => {
  let component: AcontactusComponent;
  let fixture: ComponentFixture<AcontactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcontactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
