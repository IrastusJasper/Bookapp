import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountModel } from './account.model';

describe('AccountModel', () => {
  let component: AccountModel;
  let fixture: ComponentFixture<AccountModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
