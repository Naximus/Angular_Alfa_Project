import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUserListComponent } from './info-user-list.component';

describe('InfoUserListComponent', () => {
  let component: InfoUserListComponent;
  let fixture: ComponentFixture<InfoUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
