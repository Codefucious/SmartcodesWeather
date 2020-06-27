import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardsScrollerComponent } from './weather-cards-scroller.component';

describe('WeatherCardsScrollerComponent', () => {
  let component: WeatherCardsScrollerComponent;
  let fixture: ComponentFixture<WeatherCardsScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCardsScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardsScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
