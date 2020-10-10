import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { QuestionsComponent } from './questions.component';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [QuestionsComponent],
})
export class QuestionsModule {}
