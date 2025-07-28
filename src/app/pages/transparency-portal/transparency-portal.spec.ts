import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparencyPortal } from './transparency-portal';

describe('TransparencyPortal', () => {
  let component: TransparencyPortal;
  let fixture: ComponentFixture<TransparencyPortal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransparencyPortal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransparencyPortal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
