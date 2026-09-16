import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Calculator } from './calculator';

describe('Calculator', () => {
  let component: Calculator;
  let fixture: ComponentFixture<Calculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculator],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add two numbers', () => {
    const first = '5';
    const second = '3';
    component.addOperation(first, second);
    expect(component.result).toBe(8);
  });

  it('should subtract two numbers', () => {
    const first = '5';
    const second = '3';
    component.subtractOperation(first, second);
    expect(component.result).toBe(2);
  });

  it('should multiply two numbers', () => {
    const first = '5';
    const second = '3';
    component.multiplyOperation(first, second);
    expect(component.result).toBe(15);
  });
  
  it('should divide two numbers', () => {
    const first = '6';
    const second = '3';
    component.divideOperation(first, second);
    expect(component.result).toBe(2);
  });
});
