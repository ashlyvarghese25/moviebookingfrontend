import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../Models/api-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.apiBaseUrl;

  loggedIn: boolean = localStorage.getItem("accessToken") != null ? true : false;

  constructor(private http: HttpClient) { }

  login(data: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/api/Authentication/Login`, data);
  }
}
