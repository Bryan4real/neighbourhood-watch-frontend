import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = ''
  password = ''
  registerUserData = {}
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        var decoded = jwt_decode(localStorage.getItem('token'));
        console.log(decoded);
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err)


    )

  }

}
