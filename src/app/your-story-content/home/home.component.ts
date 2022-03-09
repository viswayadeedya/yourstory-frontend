import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from 'src/app/services/story/story.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string;
  email: string;
  phone: number;
  address: string;
  subject: string;
  message: string;
  allStories;
  singleStory: any;
  singleStoryLength: any;

  constructor(private storyService: StoryService, private route: Router) {
    this.getAllStories();
  }

  getAllStories() {
    this.storyService.getStories().subscribe(
      (res) => {
        this.allStories = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  onStoryClick(story) {
    console.log(story.id);
    this.route.navigateByUrl(`story-parts/${story.id}`);
  }

  ngOnInit(): void {}
}
