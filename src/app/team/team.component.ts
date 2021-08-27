import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import teamInfo from './team.json';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
constructor() { }

ngOnInit(): void {
}

team:{id:Number, firstName:String, lastName:String, title:String, image:String, linkedIn:String,}[] = teamInfo;

}
