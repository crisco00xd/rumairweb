import { Component, OnInit } from '@angular/core';

import successStories from './about.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  successMemberList:{name:String, image:String, linkedIn:String, story:String}[] = successStories;

}
