import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourStoryContentComponent } from './your-story-content.component';

describe('YourStoryContentComponent', () => {
  let component: YourStoryContentComponent;
  let fixture: ComponentFixture<YourStoryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourStoryContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourStoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
