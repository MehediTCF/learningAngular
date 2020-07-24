import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {
  serverName = '';
  allowMyServer = false;
  createServer = 'Server not created';

  constructor() {
    setTimeout(() => {
      this.allowMyServer = true;

    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.createServer = 'Server Created. Server name is ' +this.serverName;
  }

  onUpdateName(event : Event){

    this.serverName =(<HTMLInputElement> event.target).value;
  }

}
