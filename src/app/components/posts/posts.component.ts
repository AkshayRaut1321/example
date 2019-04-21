import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { AppError } from '../../common/errors/app-error';
import { NotFoundError } from '../../common/errors/not-found-error';
import { BadRequestError } from '../../common/errors/bad-request-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostsService) {
  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response.json();
        });
  }

  createPost(input: HTMLInputElement) {
    var post: any = { title: input.value };
    this.service.createPost(post)
      .subscribe(
        response => {
          post.id = response.json().id;
          this.posts.splice(0, 0, post);
          input.value = "";
        },
        (error: AppError) => {
          if (error instanceof BadRequestError)
            // this.forms.setErrors(error.json());
            alert('Error : Bad input was supplied');
          else
            throw error;
        });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response.json());
          Object.assign(post, response.json());
        });
  }

  deletePost(id) {
    this.service.deletePost(id)
      .subscribe(
        () => {
          let postIndex = this.posts.findIndex(a => a.id == id);
          this.posts.splice(postIndex, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post is already deleted');
          else
            throw error;
        });
  }
}