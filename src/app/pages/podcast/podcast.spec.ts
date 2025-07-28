import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Podcast } from './podcast';

describe('Podcast', () => {
  let component: Podcast;
  let fixture: ComponentFixture<Podcast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Podcast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Podcast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
