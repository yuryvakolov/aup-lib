import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AupButtonComponent } from './aup-button.component';

describe('AupButtonComponent', () => {
  let component: AupButtonComponent;
  let fixture: ComponentFixture<AupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AupButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
