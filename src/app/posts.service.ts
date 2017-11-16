import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(topic: string) {
    return this.http.get(`https://www.reddit.com/r/${topic}.json`);
  }

}
