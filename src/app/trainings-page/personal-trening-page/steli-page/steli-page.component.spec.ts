import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteliPageComponent } from './steli-page.component';

describe('SteliPageComponent', () => {
  let component: SteliPageComponent;
  let fixture: ComponentFixture<SteliPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteliPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteliPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
