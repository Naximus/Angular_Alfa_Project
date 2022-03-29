import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikiPageComponent } from './niki-page.component';

describe('NikiPageComponent', () => {
  let component: NikiPageComponent;
  let fixture: ComponentFixture<NikiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NikiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
