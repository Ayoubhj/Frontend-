import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookpageComponent } from './facebookpage.component';

describe('FacebookpageComponent', () => {
  let component: FacebookpageComponent;
  let fixture: ComponentFixture<FacebookpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
