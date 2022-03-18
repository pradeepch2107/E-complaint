import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomplaintviewComponent } from './mycomplaintview.component';

describe('MycomplaintviewComponent', () => {
  let component: MycomplaintviewComponent;
  let fixture: ComponentFixture<MycomplaintviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycomplaintviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomplaintviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
