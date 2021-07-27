import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PymentcardComponent } from './pymentcard.component';

describe('PymentcardComponent', () => {
  let component: PymentcardComponent;
  let fixture: ComponentFixture<PymentcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PymentcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PymentcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
