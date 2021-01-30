import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabloaderComponent } from './tabloader.component';

describe('TabloaderComponent', () => {
  let component: TabloaderComponent;
  let fixture: ComponentFixture<TabloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabloaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
