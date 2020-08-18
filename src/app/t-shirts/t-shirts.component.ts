import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-t-shirts',
  templateUrl: './t-shirts.component.html',
  styleUrls: ['./t-shirts.component.css']
})
export class TShirtsComponent implements OnInit {
  @Input() name: string;
  
  showDiv = {
    previous : false,
  }
  constructor() { }
  
  ngOnInit() {
  }

}
