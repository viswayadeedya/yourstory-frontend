import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  SERVICE_URL = 'stories';
  constructor(private http: HttpClient) {}

  // get all stories
  getStories() {
    return this.http.get<any>(environment.apiUrl(this.SERVICE_URL + '/'));
  }

  // get one story
  getOneStory(id) {
    return this.http.get<any>(
      environment.apiUrl(`${this.SERVICE_URL}/story/${id}`)
    );
  }

  // get all story parts
  getAllPart(id) {
    return this.http.get<any>(
      environment.apiUrl(`${this.SERVICE_URL}/getAllparts/${id}`)
    );
  }

  // get by Category
  getStoryByCategory(name) {
    return this.http.get<any>(
      environment.apiUrl(`${this.SERVICE_URL}/category/${name}`)
    );
  }

  // Post new story
  newStory(data) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<any>(
      environment.apiUrl(this.SERVICE_URL + '/new'),
      data
    );
  }

  // edit story
  editStory(data, id) {
    return this.http.post<any>(
      environment.apiUrl(`${this.SERVICE_URL}/edit/${id}`),
      data
    );
  }

  // rate story
  rateStory(id) {
    return this.http.get<any>(
      environment.apiUrl(`${this.SERVICE_URL}/rate/${id}`)
    );
  }

  // post new story part
  // postNewStoryPart(data, id) {
  //   return this.http.post<any>(
  //     environment.apiUrl(`${this.SERVICE_URL}/${id}`),
  //     data
  //   );
  // }

  // delete story
  deleteStory(id) {
    return this.http.delete<any>(
      environment.apiUrl(`${this.SERVICE_URL}/story/${id}`)
    );
  }
}
