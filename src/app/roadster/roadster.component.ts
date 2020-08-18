import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-roadster',
  templateUrl: './roadster.component.html',
  styleUrls: ['./roadster.component.css']
})
export class RoadsterComponent implements OnInit {
  @Input() name: string;
  
  showDiv = {
    previous : false,
  }
  constructor() { }
  
  ngOnInit() {
  }

}
