import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() loginUser: boolean = true;
  @Output() showLogin = new EventEmitter<boolean>();
  email: string;
  password: string;
  username: string;
  header: string = 'Login To YourStory';
  userText: string = 'Not A User?';
  loginText: string = 'Login';
  Isuser: string = 'SignUp';
  constructor(private authService: LoginService) {}

  ngOnInit(): void {}

  onClick() {
    if (this.userText === 'Not A User?') {
      this.userText = 'Already a member?';
      this.Isuser = 'Login';
      this.loginText = 'SignUp';
      this.header = 'Join YourStory';
    } else {
      this.userText = 'Not A User?';
      this.Isuser = 'SignUp';
      this.loginText = 'Login';
      this.header = 'Login To YourStory';
    }
  }

  onHideDialog() {
    this.showLogin.emit(false);
  }

  login() {
    if (this.loginText === 'Login') {
      if (this.email && this.password) {
        const data = {
          email: this.email,
          password: this.password,
        };
        this.authService.login(data).subscribe((res) => {
          if (res.success) {
            // console.log(res.message);
            localStorage.setItem('token', 'Bearer ' + res.message.token);
            localStorage.setItem('userId', res.message.user.id);
            window.location.reload();
          }
          this.loginUser = false;
        });
      }
    }
  }
}
