import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsTreningPageComponent } from './kids-trening-page.component';

describe('KidsTreningPageComponent', () => {
  let component: KidsTreningPageComponent;
  let fixture: ComponentFixture<KidsTreningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsTreningPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsTreningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
