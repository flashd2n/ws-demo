import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GlueService } from './services/glue-service';
import { AppLoadModule } from './app-load/app-load.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppLoadModule
  ],
  providers: [GlueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
