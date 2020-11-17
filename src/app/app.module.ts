import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { studentListComponent } from './students/student-list.component';
import { studentService } from './students/student.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EnrollmentComponentComponent } from './enrollments/enrollment-component/enrollment-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    studentListComponent,
    HomeComponent,
    EnrollmentComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  

  ],
  providers: [studentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
