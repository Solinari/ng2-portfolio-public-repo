import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  // it('should have expected <h1> text', () => {
  //   fixture.detectChanges();
  //   const li1 = de.nativeElement;
  //   expect(li1.innerText).toMatch(/angular/i,
  //     '<h1> should say something about "Angular"');
  // });

  // it('should have expected <h1> text', () => {
  //   fixture.detectChanges();
  //   const li2 = de.nativeElement;
  //   expect(li2.innerText).toMatch(/angular/i,
  //     '<h1> should say something about "Angular"');
  // });

  // it('should have expected <h1> text', () => {
  //   fixture.detectChanges();
  //   const li3 = de.nativeElement;
  //   expect(li3.innerText).toMatch(/angular/i,
  //     '<h1> should say something about "Angular"');
  // });
});