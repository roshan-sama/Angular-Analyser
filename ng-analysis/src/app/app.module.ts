import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RjmTestComponentComponent } from './rjm-test-component/rjm-test-component.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NodeFilterPresentationComponent } from './node-filter-presentation/node-filter-presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { GraphDisplaySmartComponentComponent } from './components/graph-display-smart-component/graph-display-smart-component.component';
import { MatButtonModule } from '@angular/material/button';
import { LinkFilterPresentationComponent } from './link-filter-presentation/link-filter-presentation.component';
import { NodeDetailsPresentationComponent } from './node-details-presentation/node-details-presentation.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RjmTestComponentComponent,
    NodeFilterPresentationComponent,
    GraphDisplaySmartComponentComponent,
    LinkFilterPresentationComponent,
    NodeDetailsPresentationComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
