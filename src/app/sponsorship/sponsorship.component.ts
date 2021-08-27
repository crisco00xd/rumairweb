import { Component, OnInit } from '@angular/core';
import sponsors from './sponsorship.json'

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.css']
})
export class SponsorshipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sponsorData = sponsors

}
