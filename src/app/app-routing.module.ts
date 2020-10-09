import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionManagerComponent } from './question-manager/question-manager.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'questions', component: QuestionManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
