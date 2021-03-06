import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://neighbourhood-watch-backend.herokuapp.com/admin/user_registration"
  private _loginUrl = "https://neighbourhood-watch-backend.herokuapp.com/admin/login"

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user){
      return this.http.post<any>(this._registerUrl, user)
  }
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['neighbourhoodapp/post'])
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
