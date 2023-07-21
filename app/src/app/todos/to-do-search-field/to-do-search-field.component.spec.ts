import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoSearchFieldComponent } from './to-do-search-field.component';

describe('ToDoSearchFieldComponent', () => {
  let component: ToDoSearchFieldComponent;
  let fixture: ComponentFixture<ToDoSearchFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoSearchFieldComponent]
    });
    fixture = TestBed.createComponent(ToDoSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
