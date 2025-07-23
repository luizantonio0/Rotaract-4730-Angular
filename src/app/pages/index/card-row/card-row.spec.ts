import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRow } from './card-row';

describe('CardRow', () => {
  let component: CardRow;
  let fixture: ComponentFixture<CardRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
