import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtleticTreningPageComponent } from './atletic-trening-page.component';

describe('AtleticTreningPageComponent', () => {
  let component: AtleticTreningPageComponent;
  let fixture: ComponentFixture<AtleticTreningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtleticTreningPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtleticTreningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
