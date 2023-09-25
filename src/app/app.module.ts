import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { StarDComponent } from './star-d/star-d.component';
import { NotFComponent } from './not-f/not-f.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    StarComponent,
    StarDComponent,
    NotFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
