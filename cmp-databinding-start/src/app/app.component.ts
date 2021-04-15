import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'S1', content: 'How r ya'}, {type: 'blueprint', name: 'S1', content: 'How r ya'}];

}
