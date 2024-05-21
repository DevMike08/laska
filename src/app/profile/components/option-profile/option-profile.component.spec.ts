import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionProfileComponent } from './option-profile.component';

describe('OptionProfileComponent', () => {
  let component: OptionProfileComponent;
  let fixture: ComponentFixture<OptionProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionProfileComponent]
    });
    fixture = TestBed.createComponent(OptionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
