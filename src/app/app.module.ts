import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OverviewComponent } from './overview/overview.component';
import { MicroComponent } from './micro/micro.component';
import { RegularComponent } from './regular/regular.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { DonateComponent } from './donate/donate.component';
import { NewsComponent } from './news/news.component';
import { TeamComponent } from './team/team.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AeroComponent } from './aero/aero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    OverviewComponent,
    MicroComponent,
    RegularComponent,
    AdvancedComponent,
    DonateComponent,
    TeamComponent,
    NewsComponent,
    SponsorshipComponent,
    AeroComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
