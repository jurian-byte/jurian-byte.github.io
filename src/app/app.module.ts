import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';
import {FooterComponent} from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { ProjectsComponent } from './projects/projects.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ToastModule} from 'primeng/toast';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NotFoundComponent,
    AboutMeComponent,
    ProjectsComponent,
    FooterComponent,
    ContactDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,


    ButtonModule,
    MenubarModule,
    PanelModule,
    CardModule,
    DividerModule,
    DockModule,
    CarouselModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
