import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDetailsPresentationComponent } from './node-details-presentation.component';

describe('NodeDetailsPresentationComponent', () => {
  let component: NodeDetailsPresentationComponent;
  let fixture: ComponentFixture<NodeDetailsPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeDetailsPresentationComponent]
    });
    fixture = TestBed.createComponent(NodeDetailsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
