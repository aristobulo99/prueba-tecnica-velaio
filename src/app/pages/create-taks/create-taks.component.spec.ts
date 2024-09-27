import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaksComponent } from './create-taks.component';

describe('CreateTaksComponent', () => {
  let component: CreateTaksComponent;
  let fixture: ComponentFixture<CreateTaksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTaksComponent]
    });
    fixture = TestBed.createComponent(CreateTaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
