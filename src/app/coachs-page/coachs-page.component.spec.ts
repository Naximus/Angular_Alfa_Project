import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachsPageComponent } from './coachs-page.component';

describe('CoachsPageComponent', () => {
  let component: CoachsPageComponent;
  let fixture: ComponentFixture<CoachsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
