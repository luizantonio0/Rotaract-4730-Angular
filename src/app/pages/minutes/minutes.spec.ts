import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minutes } from './minutes';

describe('Minutes', () => {
  let component: Minutes;
  let fixture: ComponentFixture<Minutes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Minutes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Minutes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
