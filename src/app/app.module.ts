import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component],
  imports: [BrowserModule,MatFormFieldModule,MatInputModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
