import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FirstPageWindowComponent } from './components/first-page-window/first-page-window.component';
import { SecondPageWindowComponent } from './components/second-page-window/second-page-window.component';
import { UploadHandler } from './directives/upload-handler.directive';
import { EmotionReckonService } from './service/emotion-reckon.service';



@NgModule({
  declarations: [
    WelcomeComponent,
    FirstPageWindowComponent,
    SecondPageWindowComponent,
    UploadHandler,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ EmotionReckonService ],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
