import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatageryComponent } from './add-catagery.component';

describe('AddCatageryComponent', () => {
  let component: AddCatageryComponent;
  let fixture: ComponentFixture<AddCatageryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCatageryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatageryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
