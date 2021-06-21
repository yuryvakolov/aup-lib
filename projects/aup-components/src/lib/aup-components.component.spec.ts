import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AupComponentsComponent } from './aup-components.component';

describe('AupComponentsComponent', () => {
  let component: AupComponentsComponent;
  let fixture: ComponentFixture<AupComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AupComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AupComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
