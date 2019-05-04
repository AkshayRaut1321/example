import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { AppError } from '../common/errors/app-error';
import { BadRequestError } from '../common/errors/bad-request-error';
import { NotFoundError } from '../common/errors/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: Http) { }

  private handleError(err: Response) {
    if (err.status === 400)
      return throwError(new BadRequestError(err.json()));
    if (err.status === 404)
      return throwError(new NotFoundError());
    return throwError(new AppError(err.json()));
  }

  getAll() {
    return this.http.get(this.url)
      .pipe(map(response => response.json()),
        catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(map(response => response.json()),
      catchError(this.handleError));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, resource)
      .pipe(map(response => response.json()),
      catchError(this.handleError));;
  }

  delete(id: number) {
    return this.http.delete(this.url + '/a/b' + id)
      .pipe(map(response => response.json()),
      catchError(this.handleError), retry(3));
  }
}