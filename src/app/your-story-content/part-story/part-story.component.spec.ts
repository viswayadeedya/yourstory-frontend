import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartStoryComponent } from './part-story.component';

describe('PartStoryComponent', () => {
  let component: PartStoryComponent;
  let fixture: ComponentFixture<PartStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
