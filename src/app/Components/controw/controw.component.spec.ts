import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControwComponent } from './controw.component';

describe('ControwComponent', () => {
  let component: ControwComponent;
  let fixture: ComponentFixture<ControwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
