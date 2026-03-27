import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsharpComponent } from './subjects/csharp/csharp.component';
import { Dotnet8Component } from './subjects/dotnet8/dotnet8.component';
import { AngularTopicComponent } from './subjects/angular/angular.component';
import { AzureComponent } from './subjects/azure/azure.component';
import { CicdComponent } from './subjects/cicd/cicd.component';
import { DsaComponent } from './subjects/dsa/dsa.component';
import { SystemDesignComponent } from './subjects/system-design/system-design.component';

const routes: Routes = [
  { path: '', redirectTo: '/csharp', pathMatch: 'full' },
  { path: 'csharp', component: CsharpComponent },
  { path: 'dotnet8', component: Dotnet8Component },
  { path: 'angular', component: AngularTopicComponent },
  { path: 'azure', component: AzureComponent },
  { path: 'ci-cd', component: CicdComponent },
  { path: 'dsa', component: DsaComponent },
  { path: 'system-design', component: SystemDesignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
