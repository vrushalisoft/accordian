import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }from "@angular/platform-browser/animations";
import { AccordionModule } from 'primeng/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionFormComponent } from './accordion/accordion-form/accordion-form.component';
import { AccordionListComponent } from './accordion/accordion-list/accordion-list.component';
import { FormsModule } from '@angular/forms';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionFormComponent,
    AccordionListComponent,
    AccordionComponent
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
