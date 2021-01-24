import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWeatherComponent } from './get-weather.component';

describe('GetWeatherComponent', () => {
  let component: GetWeatherComponent;
  let fixture: ComponentFixture<GetWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
