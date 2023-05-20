import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeFilterPresentationComponent } from './node-filter-presentation.component';

describe('NodeFilterPresentationComponent', () => {
  let component: NodeFilterPresentationComponent;
  let fixture: ComponentFixture<NodeFilterPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeFilterPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeFilterPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
