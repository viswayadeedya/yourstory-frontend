import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from 'src/app/services/story/story.service';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user/user.service';
import { PartService } from 'src/app/services/part/part.service';

@Component({
  selector: 'app-full-story',
  templateUrl: './full-story.component.html',
  styleUrls: ['./full-story.component.scss'],
})
export class FullStoryComponent implements OnInit {
  singleStory: any;
  singleStoryLength: any;
  user: any;
  tags: any;

  constructor(
    private storyService: StoryService,
    private router: ActivatedRoute,
    private route: Router,
    private messageService: MessageService,
    private userService: UserService,
    private partService: PartService
  ) {}

  ngOnInit(): void {
    this.getOneStory();
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService.getUserByID(localStorage.getItem('userId')).subscribe(
      (res) => {
        this.user = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getOneStory() {
    this.storyService
      .getOneStory(this.router.snapshot.paramMap.get('id'))
      .subscribe((data) => {
        console.log(data.message);
        this.singleStory = data.message;
        this.tags = this.singleStory.tags[0].split(',');
        this.singleStoryLength = this.singleStory.parts.length;
      });
  }

  onClickPart(part) {
    this.route.navigateByUrl(
      `/part/${part._id}?storyId=${this.singleStory.id}`
    );
  }
}
