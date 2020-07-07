import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import {DictionaryService} from './dictionary.service';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { TimelinesComponent } from './timelines/timelines.component';
import { DictionaryDetaiComponent } from './dictionary-detai/dictionary-detai.component';
import { LoginStep1Component } from './login-step1/login-step1.component';
import { LoginStep2Component } from './login-step2/login-step2.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BlogListComponent} from './blog/blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    TimelinesComponent,
    DictionaryDetaiComponent,
    LoginStep1Component,
    LoginStep2Component,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
