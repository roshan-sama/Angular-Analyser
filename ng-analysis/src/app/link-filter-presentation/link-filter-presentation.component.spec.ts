import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFilterPresentationComponent } from './link-filter-presentation.component';

describe('LinkFilterPresentationComponent', () => {
  let component: LinkFilterPresentationComponent;
  let fixture: ComponentFixture<LinkFilterPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkFilterPresentationComponent]
    });
    fixture = TestBed.createComponent(LinkFilterPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
