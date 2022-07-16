import { Component, OnInit } from '@angular/core';

import { loginPayLoad } from 'src/app/models/payloads/login.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage{

  constructor() { }

  public loginPayLoad: loginPayLoad = {
  email: '',
  password: '',
  };

  public login (): void{
  console.log(this.loginPayLoad);
  }

}
