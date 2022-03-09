import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  SERVICE_URL: string = 'users';

  constructor(private http: HttpClient) {}

  login(data) {
    return this.http.post<any>(
      environment.apiUrl(this.SERVICE_URL + '/login'),
      data
    );
  }
}
