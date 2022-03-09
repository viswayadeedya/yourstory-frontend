import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartService } from 'src/app/services/part/part.service';

@Component({
  selector: 'app-part-story',
  templateUrl: './part-story.component.html',
  styleUrls: ['./part-story.component.scss'],
})
export class PartStoryComponent implements OnInit {
  part: any;
  showEdit: boolean;
  storyId: string;
  constructor(
    private partService: PartService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.storyId = this.router.snapshot.queryParamMap.get('firstParamKey');
    this.getPartStory();
  }

  getPartStory() {
    this.partService.getPart(this.router.snapshot.paramMap.get('id')).subscribe(
      (data) => {
        this.part = data.message[0];
        console.log(localStorage.getItem('userId'));
        if (this.part.userId == localStorage.getItem('userId')) {
          this.showEdit = true;
        }
        console.log(data);
      },
      (err) => console.log(err)
    );
  }

  giveRating() {
    this.partService
      .ratePart(this.router.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        window.location.reload();
      });
  }

  onEdit(part) {
    this.route.navigateByUrl('/mainstory/' + this.storyId + '/' + part._id);
  }
}
