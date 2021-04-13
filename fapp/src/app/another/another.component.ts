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
  serverCreated = false;
  servers = ['ts1', 'ts2'];

  constructor() {
    setTimeout(() => {
      this.allowMyServer = true;

    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.createServer = "Server Created successfully";
  }

  // onUpdateName(event : Event){

  //   this.serverName =(<HTMLInputElement> event.target).value;
  // }

}
