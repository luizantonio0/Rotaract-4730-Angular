import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaractData } from './rotaract-data';

describe('RotaractData', () => {
  let component: RotaractData;
  let fixture: ComponentFixture<RotaractData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotaractData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaractData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
