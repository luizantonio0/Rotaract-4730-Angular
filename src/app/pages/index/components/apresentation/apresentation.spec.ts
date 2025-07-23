import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apresentation } from './apresentation';

describe('Apresentation', () => {
  let component: Apresentation;
  let fixture: ComponentFixture<Apresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apresentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
