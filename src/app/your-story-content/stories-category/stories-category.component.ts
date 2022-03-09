import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from 'src/app/services/story/story.service';

@Component({
  selector: 'app-stories-category',
  templateUrl: './stories-category.component.html',
  styleUrls: ['./stories-category.component.scss'],
})
export class StoriesCategoryComponent implements OnInit {
  category: string;
  allStories: any[];

  constructor(
    private route: Router,
    private storyService: StoryService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.category = this.router.snapshot.paramMap.get('category');
    this.getStories();
  }

  getStories() {
    this.storyService
      .getStoryByCategory(this.router.snapshot.paramMap.get('category'))
      .subscribe((res) => {
        console.log(res);
        this.allStories = res.message;
      });
  }

  onStoryClick(story) {
    console.log(story.id);
    this.route.navigateByUrl(`story-parts/${story.id}`);
  }
}
