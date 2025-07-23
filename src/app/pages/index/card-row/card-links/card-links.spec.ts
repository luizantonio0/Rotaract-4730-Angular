import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLinks } from './card-links';

describe('CardLinks', () => {
  let component: CardLinks;
  let fixture: ComponentFixture<CardLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
