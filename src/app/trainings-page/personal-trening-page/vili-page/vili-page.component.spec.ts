import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViliPageComponent } from './vili-page.component';

describe('ViliPageComponent', () => {
  let component: ViliPageComponent;
  let fixture: ComponentFixture<ViliPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViliPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViliPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
