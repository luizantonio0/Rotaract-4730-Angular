import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copywriting } from './copywriting';

describe('Copywriting', () => {
  let component: Copywriting;
  let fixture: ComponentFixture<Copywriting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Copywriting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Copywriting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
