import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesCategoryComponent } from './stories-category.component';

describe('StoriesCategoryComponent', () => {
  let component: StoriesCategoryComponent;
  let fixture: ComponentFixture<StoriesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
