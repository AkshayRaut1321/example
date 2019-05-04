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
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    GithubProfileComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'followers/:userid',
        component: GithubProfileComponent,
      },
      {
        path: 'followers',
        component: GithubFollowersComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ])
  ],
  providers: [
    CoursesService,
    PostsService,
    {provide : ErrorHandler, useClass : GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }