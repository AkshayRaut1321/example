import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  // id : number = 1;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Initialized');
    console.log(this.route.snapshot.paramMap.get('userid'));
    // this.route.paramMap.subscribe((params =>{
    //   this.id = +params.get('userid');
    //   console.log(params.get('userid'));
    //   this.id++;
    // }));
  }
}
