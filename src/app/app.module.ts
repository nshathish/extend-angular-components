import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatInputModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomInputComponent } from './controls/custom-input/custom-input.component';
import { CounterInputComponent } from './controls/counter-input/counter-input.component';
import { CustomDateComponent } from './controls/custom-date/custom-date.component';
import { CustomMaterialDateComponent } from './controls/custom-material-date/custom-material-date.component';
import { Learn1Component } from './components/learn1/learn1.component';
import { Car } from "./components/learn1/car";
import { HttpClientModule } from "@angular/common/http";
import { Learn1ChildComponent } from './components/learn1-child/learn1-child.component';
import { Learn1SiblingComponent } from './components/learn1-sibling/learn1-sibling.component';
import { DefaultThemeDirective } from './directives/default-theme.directive';


@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    CounterInputComponent,
    CustomDateComponent,
    CustomMaterialDateComponent,
    Learn1Component,
    Learn1ChildComponent,
    Learn1SiblingComponent,
    DefaultThemeDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    Car
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
