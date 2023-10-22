import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';;
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
