import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MicroComponent } from './micro.component';

describe('MicroComponent', () => {
  let component: MicroComponent;
  let fixture: ComponentFixture<MicroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
