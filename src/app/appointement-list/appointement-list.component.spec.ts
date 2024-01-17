import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointementListComponent } from './appointement-list.component';

describe('AppointementListComponent', () => {
  let component: AppointementListComponent;
  let fixture: ComponentFixture<AppointementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointementListComponent]
    });
    fixture = TestBed.createComponent(AppointementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
