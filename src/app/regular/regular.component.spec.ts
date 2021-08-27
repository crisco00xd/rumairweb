import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegularComponent } from './regular.component';

describe('RegularComponent', () => {
  let component: RegularComponent;
  let fixture: ComponentFixture<RegularComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
