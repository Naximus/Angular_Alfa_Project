import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTreningPageComponent } from './group-trening-page.component';

describe('GroupTreningPageComponent', () => {
  let component: GroupTreningPageComponent;
  let fixture: ComponentFixture<GroupTreningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTreningPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTreningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
