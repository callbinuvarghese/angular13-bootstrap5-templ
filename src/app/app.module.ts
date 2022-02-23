import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { IntroComponent } from './Components/intro/intro.component';
import { ControwComponent } from './Components/controw/controw.component';
import { FooterComponent } from './Components/footer/footer.component';
import { VideoComponent } from './Components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    ControwComponent,
    FooterComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
