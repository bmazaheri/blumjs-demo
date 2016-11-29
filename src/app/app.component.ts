import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  public someDate: Date = new Date();
  public ditems: any[];

  ngOnInit() {
    this.ditems = [{ label: "a", value: { id: 1 } },
    { label: "b", value: { id: 2 } },
    { label: "ab", value: { id: 3 } },
    { label: "aa", value: { id: 4 } },
    { label: "abc", value: { id: 5 } }
    ];
    console.log(this.ditems);
  }
}
