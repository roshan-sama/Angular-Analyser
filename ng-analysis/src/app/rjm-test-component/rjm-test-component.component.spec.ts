import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RjmTestComponentComponent } from './rjm-test-component.component';

describe('RjmTestComponentComponent', () => {
  let component: RjmTestComponentComponent;
  let fixture: ComponentFixture<RjmTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RjmTestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RjmTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
