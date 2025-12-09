import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-rooot',
  imports: [RouterOutlet, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  protected readonly title = signal<string>('angular-app');
  protected readonly name = signal<string>('AitaIshe');
  protected readonly isLoggedIn = signal<boolean>(true);
  isEditable: boolean = true;

}
