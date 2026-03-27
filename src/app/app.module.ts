import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { QaDialogComponent } from './qa-dialog.component';
import { CsharpComponent } from './subjects/csharp/csharp.component';
import { Dotnet8Component } from './subjects/dotnet8/dotnet8.component';
import { AngularTopicComponent } from './subjects/angular/angular.component';
import { AzureComponent } from './subjects/azure/azure.component';
import { CicdComponent } from './subjects/cicd/cicd.component';
import { DsaComponent } from './subjects/dsa/dsa.component';
import { SystemDesignComponent } from './subjects/system-design/system-design.component';

@NgModule({
  declarations: [
    AppComponent,
    QaDialogComponent,
    CsharpComponent,
    Dotnet8Component,
    AngularTopicComponent,
    AzureComponent,
    CicdComponent,
    DsaComponent,
    SystemDesignComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
