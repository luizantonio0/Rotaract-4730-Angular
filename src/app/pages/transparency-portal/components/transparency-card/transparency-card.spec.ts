import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparencyCard } from './transparency-card';

describe('TransparencyCard', () => {
  let component: TransparencyCard;
  let fixture: ComponentFixture<TransparencyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransparencyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransparencyCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
