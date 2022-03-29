import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoyanPageComponent } from './stoyan-page.component';

describe('StoyanPageComponent', () => {
  let component: StoyanPageComponent;
  let fixture: ComponentFixture<StoyanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoyanPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoyanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
