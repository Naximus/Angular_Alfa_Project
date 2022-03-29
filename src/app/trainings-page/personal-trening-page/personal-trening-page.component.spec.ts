import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTreningPageComponent } from './personal-trening-page.component';

describe('PersonalTreningPageComponent', () => {
  let component: PersonalTreningPageComponent;
  let fixture: ComponentFixture<PersonalTreningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalTreningPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTreningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
