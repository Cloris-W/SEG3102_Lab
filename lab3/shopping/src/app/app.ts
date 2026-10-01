import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingList } from './shopping-list/shopping-list';
import { Header } from './header/header';

@Component({
  imports: [RouterOutlet, ShoppingList, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('shopping');
}
