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
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    var post: any = { title: input.value };
    this.posts.splice(0, 0, post);
    input.value = "";

    this.service.create(post)
      .subscribe(
        newPost => {
          Object.assign(post, newPost.json());
        },
        (error: AppError) => {
          this.posts.splice(0, 1);
          input.value = post.title;
          if (error instanceof BadRequestError)
            // this.forms.setErrors(error.json());
            alert('Error : Bad input was supplied');
          else
            throw error;
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          Object.assign(post, updatedPost);
        });
  }

  deletePost(post) {
    // let postIndex = this.posts.findIndex(a => a.id == post.id);
    // this.posts.splice(postIndex, 1);

    this.service.delete(post.id)
      .subscribe();
      //   (error: AppError) => {
      //     this.posts.splice(postIndex, 0, post);

      //     if (error instanceof NotFoundError)
      //       alert('This post is already deleted');
      //     else
      //       throw error;
      //   });
  }
}