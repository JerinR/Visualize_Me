import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MdCardModule } from '@angular/material';
import {MdGridListModule} from '@angular/material';

import { AppComponent }  from './app.component';
import { HomeTabComponent } from './components/home-tab.component'
import { ContactTabComponent } from './components/contact-tab.component'
import { PageNotFoundComponent } from './components/page-not-found.component'
import { CardComponent } from './components/card_component/card.component'

const appRoutes : Routes = [
  {
    path: 'home',
    component: HomeTabComponent
  },
  {
    path: 'contact',
    component: ContactTabComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports:      [ BrowserModule,
    RouterModule.forRoot(appRoutes),
    MdCardModule.forRoot(),
    MdGridListModule
  ],
  declarations: [ AppComponent,
    HomeTabComponent,
    ContactTabComponent,
    PageNotFoundComponent,
    CardComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
