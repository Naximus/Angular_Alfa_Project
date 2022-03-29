import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabataPageComponent } from './tabata-page.component';

describe('TabataPageComponent', () => {
  let component: TabataPageComponent;
  let fixture: ComponentFixture<TabataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
