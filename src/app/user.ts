import { Component } from "@angular/core";

@Component({
  selector: 'app-user',
  template: `{{ userName }}`
})
export class User {
    userName: string = 'Jemimah Aita';
}