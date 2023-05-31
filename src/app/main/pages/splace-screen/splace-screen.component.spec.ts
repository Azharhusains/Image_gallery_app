import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplaceScreenComponent } from './splace-screen.component';

describe('SplaceScreenComponent', () => {
  let component: SplaceScreenComponent;
  let fixture: ComponentFixture<SplaceScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplaceScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplaceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
