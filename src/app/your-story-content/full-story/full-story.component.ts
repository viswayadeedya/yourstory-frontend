import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from 'src/app/services/story/story.service';

@Component({
  selector: 'app-full-story',
  templateUrl: './full-story.component.html',
  styleUrls: ['./full-story.component.scss'],
})
export class FullStoryComponent implements OnInit {
  singleStory: any;
  singleStoryLength: any;

  constructor(
    private storyService: StoryService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOneStory();
  }

  getOneStory() {
    this.storyService
      .getAllPart(this.router.snapshot.paramMap.get('id'))
      .subscribe((data) => {
        console.log(data);
        this.singleStory = data.message[0];
        console.log(this.singleStory);
        this.singleStoryLength = 1;
        // this.singleStory.parts.length;
      });
  }
}
