import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { NameComponent } from './name/name.component';
import { ContactComponent } from './contact/contact.component';
import { ValuesComponent } from './values/values.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes= [
  {path:"", component: HomeComponent},
  {path:"discover", component: DiscoverComponent},
  {path:"name", component: NameComponent},
  {path:"contact", component: ContactComponent},
  {path:"values", component: ValuesComponent},
  {path:"blog", component: BlogComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiscoverComponent,
    NameComponent,
    ContactComponent,
    ValuesComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
