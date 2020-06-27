import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardsDesktopComponent } from './weather-cards-desktop.component';

describe('WeatherCardsDesktopComponent', () => {
  let component: WeatherCardsDesktopComponent;
  let fixture: ComponentFixture<WeatherCardsDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCardsDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
