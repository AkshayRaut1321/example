import { Component } from '@angular/core';
import {CoursesService} from './courses.service'

@Component({
    selector:'courses',
    template:`<h1>{{"Title : " + getTitle()}}  </h1>
                <br/>
                <img [src]="imageUrl" />
                <input type="text" value="title" />
                <input type="text" value="title" />
                <ul>
                    <li *ngFor="let course of courses">
                        {{course}}
                    </li>
                </ul>
                <table>
                    <tr>
                        <td colspan="2"></td>
                    </tr>
                </table>
                <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>`
})
export class CoursesComponent {
    title="Courses"
    getTitle = () => this.title;
    courses;
    imageUrl ="http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = false;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}