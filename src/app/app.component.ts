import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = "Hello Angular";
  changeTitle($event:any) {
    this.title = $event.target.value;
 }
}