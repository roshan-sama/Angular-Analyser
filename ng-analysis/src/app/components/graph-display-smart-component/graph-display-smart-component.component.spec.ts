import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDisplaySmartComponentComponent } from './graph-display-smart-component.component';

describe('GraphDisplaySmartComponentComponent', () => {
  let component: GraphDisplaySmartComponentComponent;
  let fixture: ComponentFixture<GraphDisplaySmartComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphDisplaySmartComponentComponent]
    });
    fixture = TestBed.createComponent(GraphDisplaySmartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
