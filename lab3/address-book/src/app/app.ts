import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AddressList } from './address-list/address-list';

@Component({
  imports: [RouterOutlet, Header, AddressList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('address-book');
}
