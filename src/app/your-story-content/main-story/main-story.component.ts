import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartService } from 'src/app/services/part/part.service';

@Component({
  selector: 'app-main-story',
  templateUrl: './main-story.component.html',
  styleUrls: ['./main-story.component.scss'],
})
export class MainStoryComponent implements OnInit {
  partTitle: string;
  partDescription0: string;
  successPart: boolean = false;
  imagePath: any;
  url: string | ArrayBuffer;
  selectedFile: File;
  part: any;

  //   insertHtml = `<p>
  //   <textarea
  //     [rows]="5"
  //     [cols]="30"
  //     placeholder="Write your story here...  "
  //     pInputTextarea
  //     [(ngModel)]="partDescription0"
  //     (keyup)="onPressEnter($event)"
  //     [autoResize]="true"
  //   ></textarea>
  // </p>`;
  constructor(
    private partService: PartService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getPartStory();
  }

  getPartStory() {
    this.partService
      .getPart(this.router.snapshot.paramMap.get('partId'))
      .subscribe(
        (data) => {
          this.part = data.message[0];
          this.partTitle = this.part.title;
          this.partDescription0 = this.part.description;
          this.url = this.part.images;
        },
        (err) => console.log(err)
      );
  }

  onBasicUpload(e): void {
    console.log(e);
    this.selectedFile = <File>e[0];
    const files = e;
    if (files.length === 0) return;
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }

  onPressEnter(e) {
    if (e.key === 'Enter') {
      console.log(this.partDescription0);
    }
  }

  goToHome() {
    this.route.navigateByUrl('/home');
  }

  newPart() {
    console.log(this.partDescription0);
    if (this.partTitle && this.partDescription0) {
      const formData = new FormData();
      formData.append('userId', localStorage.getItem('userId'));
      formData.append('images', this.selectedFile, this.selectedFile.name);
      formData.append('title', this.partTitle);
      formData.append('description', this.partDescription0);
      const id = this.router.snapshot.paramMap.get('storyId');
      this.partService.newPart(formData, id).subscribe((res) => {
        this.successPart = true;
        console.log(res);
      });
    }
  }
}
