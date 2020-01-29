import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatlogComponent } from './catlog.component';

describe('CatlogComponent', () => {
  let component: CatlogComponent;
  let fixture: ComponentFixture<CatlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
