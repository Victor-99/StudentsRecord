import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppersListComponent } from './toppers-list.component';

describe('ToppersListComponent', () => {
  let component: ToppersListComponent;
  let fixture: ComponentFixture<ToppersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
