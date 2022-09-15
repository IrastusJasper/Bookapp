import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatageryListComponent } from './catagery-list.component';

describe('CatageryListComponent', () => {
  let component: CatageryListComponent;
  let fixture: ComponentFixture<CatageryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatageryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatageryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
