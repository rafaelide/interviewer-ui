import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { QuestionsModule } from './questions/questions.module';

@NgModule({
  declarations: [AppComponent, HomeComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    QuestionsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
