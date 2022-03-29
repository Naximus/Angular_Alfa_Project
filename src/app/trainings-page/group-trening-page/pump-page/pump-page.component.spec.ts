import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpPageComponent } from './pump-page.component';

describe('PumpPageComponent', () => {
  let component: PumpPageComponent;
  let fixture: ComponentFixture<PumpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
