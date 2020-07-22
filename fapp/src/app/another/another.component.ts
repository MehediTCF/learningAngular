import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {
  allowMyServer = false;

  constructor() {
    setTimeout(() => {
      this.allowMyServer = true;

    }, 2000);
   }

  ngOnInit(): void {
  }

}
