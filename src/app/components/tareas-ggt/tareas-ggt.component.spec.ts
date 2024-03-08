import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasGgtComponent } from './tareas-ggt.component';

describe('TareasGgtComponent', () => {
  let component: TareasGgtComponent;
  let fixture: ComponentFixture<TareasGgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasGgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasGgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
