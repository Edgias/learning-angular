import { Component, input, output } from "@angular/core";

@Component({
  selector: 'app-user',
  template: `{{ userName }} 🎉: {{ occupation() }} <br>
             Years of Experience: {{ yearsOfExperience }} <br>
             <button (click)="incrementYearsOfExperience()">Gain Experience</button>
            `
})
export class User {
    userName: string = 'Jemimah Aita';
    occupation = input<string>();
    yearsOfExperience: number = 0;
    readonly incrementYearsOfExperienceEvent = output<number>();

    incrementYearsOfExperience() {
        this.yearsOfExperience++;
        this.incrementYearsOfExperienceEvent.emit(this.yearsOfExperience);
    }
}