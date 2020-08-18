import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsterComponent } from './roadster.component';

describe('RoadsterComponent', () => {
  let component: RoadsterComponent;
  let fixture: ComponentFixture<RoadsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
