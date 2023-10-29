import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputListComponent } from './input-list.component';

describe('InputListComponent', () => {
  let component: InputListComponent;
  let fixture: ComponentFixture<InputListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputListComponent]
    });
    fixture = TestBed.createComponent(InputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
