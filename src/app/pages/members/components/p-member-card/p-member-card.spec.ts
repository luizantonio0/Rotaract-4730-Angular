import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMemberCard } from './p-member-card';

describe('PMemberCard', () => {
  let component: PMemberCard;
  let fixture: ComponentFixture<PMemberCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PMemberCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMemberCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
