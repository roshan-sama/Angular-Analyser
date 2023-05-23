import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RjmTestComponentComponent } from './rjm-test-component/rjm-test-component.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NodeFilterPresentationComponent } from './node-filter-presentation/node-filter-presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { GraphDisplaySmartComponentComponent } from './components/graph-display-smart-component/graph-display-smart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RjmTestComponentComponent,
    NodeFilterPresentationComponent,
    GraphDisplaySmartComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
