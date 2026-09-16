import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.html',
    styleUrls: ['./calculator.css'],
    standalone: true,
    imports: [DecimalPipe]
})
export class Calculator {
  firstNumber = 0;
  secondNumber = 0;
  result = 0;

  addOperation(first: string, second: string): void {
    this.firstNumber = Number(first);
    this.secondNumber = Number(second);
    this.result = this.firstNumber + this.secondNumber;
  }

  subtractOperation(first: string, second: string): void {
    this.firstNumber = Number(first);
    this.secondNumber = Number(second);
    this.result = this.firstNumber - this.secondNumber;
  }

  multiplyOperation(first: string, second: string): void {
    this.firstNumber = Number(first);
    this.secondNumber = Number(second);
    this.result = this.firstNumber * this.secondNumber;
  }

  divideOperation(first: string, second: string): void {
    this.firstNumber = Number(first);
    this.secondNumber = Number(second);
    this.result = this.firstNumber / this.secondNumber;
  }
}