import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsMainText } from './about-us-main-text';

describe('AboutUsMainText', () => {
  let component: AboutUsMainText;
  let fixture: ComponentFixture<AboutUsMainText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsMainText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsMainText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
