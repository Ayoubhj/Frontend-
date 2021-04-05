import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbeordComponent } from './dashbeord.component';

describe('DashbeordComponent', () => {
  let component: DashbeordComponent;
  let fixture: ComponentFixture<DashbeordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbeordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbeordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
