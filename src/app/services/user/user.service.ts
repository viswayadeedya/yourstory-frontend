import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  SERVICE_URL = 'users';

  constructor(private http: HttpClient) {}

  getUserByID(id) {
    return this.http.get<any>(environment.apiUrl(`${this.SERVICE_URL}/${id}`));
  }
}
