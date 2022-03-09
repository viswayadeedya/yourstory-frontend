import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PartService {
  SERVICE_URL = 'newstory';
  constructor(private http: HttpClient) {}

  // get one part
  getPart(id) {
    return this.http.get<any>(environment.apiUrl(`${this.SERVICE_URL}/${id}`));
  }

  // post new part
  newPart(data, storyId) {
    return this.http.post<any>(
      environment.apiUrl(this.SERVICE_URL + '/newpart/' + storyId),
      data
    );
  }

  // update part story
  updatePart(data, id) {
    return this.http.put<any>(
      environment.apiUrl(`${this.SERVICE_URL}/update/${id}`),
      data
    );
  }

  // rate part
  ratePart(id) {
    return this.http.get<any>(
      environment.apiUrl(`${this.SERVICE_URL}/rate/${id}`)
    );
  }

  // delete part
  deletePart(id) {
    return this.http.delete<any>(
      environment.apiUrl(`${this.SERVICE_URL}/part/${id}`)
    );
  }
}
