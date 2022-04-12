import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUserItemsComponent } from './info-user-items.component';

describe('InfoUserItemsComponent', () => {
  let component: InfoUserItemsComponent;
  let fixture: ComponentFixture<InfoUserItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUserItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUserItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
