import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app/app.component';
import { CoursesComponent } from './components/courses.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesService } from './services/courses.service';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { PanelComponent } from './components/panel/panel.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { NewCourseFormComponent } from './components/new-course-form/new-course-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { GlobalErrorHandler } from './common/errors/global-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    PostsService,
    {provide : ErrorHandler, useClass : GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }