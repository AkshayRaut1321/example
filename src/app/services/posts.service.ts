import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/errors/app-error';
import { BadRequestError } from '../common/errors/bad-request-error';
import { NotFoundError } from '../common/errors/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  private handleError(err: Response) {
    if (err.status === 400)
      return throwError(new BadRequestError(err.json()));
    if (err.status === 404)
      return throwError(new NotFoundError());
    return throwError(new AppError(err.json()));
  }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, post);
  }

  deletePost(id: number) {
    return this.http.delete(this.url + '/a/a' + id)
      .pipe(catchError(this.handleError));
  }
}