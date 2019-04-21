import { Component } from '@angular/core';
import { Point } from 'point';

// let point = new Point(10, 20);
// point.draw();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  viewMode='map';
  courses = [];
  isFavorite=true;
  canSave = true;

  data = {
    title:"Review",
    assignee:null
    // {
    //    name:"John Doe"
    // }
  }

  onAdd() {
    this.courses.push({id : 4, name:'course4'});
  }

  onRemove(index){
    this.courses.splice(index, 1);
  }

  loadCourses(){
    this.courses = [
      {id : 1, name:'course1'},
      {id : 2, name:'course2'},
      {id : 3, name:'course3'},
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }
}