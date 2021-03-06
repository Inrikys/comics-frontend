import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: ComicsHomeComponent;
  let fixture: ComponentFixture<ComicsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
