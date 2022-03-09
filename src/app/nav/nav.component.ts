import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from '../services/story/story.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  showLogin: boolean = false;
  username = 'VY';
  token: boolean;
  items = [
    'Action',
    'Adventure',
    'ChickLit',
    'Fanfiction',
    'Fantasy',
    'General Fiction',
    'Historical Fiction',
    'Horror',
    'Humor',
    'Mystery / Thriller',
    'Non-Fiction',
    'Paranormal',
    'Poetry',
    'Random',
    'Romance',
    'Science Fiction',
    'Short Story',
    'Spiritual',
    'Teen Fiction',
    'Vampire',
    'Werewolf',
  ];
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token') ? true : false;
  }

  login() {
    this.showLogin = true;
  }
  logout() {
    localStorage.clear();
    window.location.reload();
  }
  hideLogin(bool) {
    this.showLogin = false;
  }
  getStories(i) {
    this.route.navigateByUrl(`categorystories/${i}?category=${i}`);
  }
}
