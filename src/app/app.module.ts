import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {TooltipModule} from 'primeng/tooltip';
import {MenuModule} from 'primeng/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
VermerkService

import { AppComponent } from './app.component';
import { VermerkService } from './vermerk.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    TabViewModule,
    HttpClientModule,
    DropdownModule,
    ButtonModule,
    TooltipModule,
    MenuModule,
    TableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

