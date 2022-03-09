import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StoryService } from 'src/app/services/story/story.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss'],
})
export class WriteComponent implements OnInit {
  title: string;
  description: string;
  mainCharecter: string;
  image;
  selectedCategory;
  tags;
  category = [
    { name: 'Action' },
    { name: 'Adventure' },
    { name: 'ChickLit' },
    { name: 'Fanfiction' },
    { name: 'Fantasy' },
    { name: 'General Fiction' },
    { name: 'Historical Fiction' },
    { name: 'Horror' },
    { name: 'Humor' },
    { name: 'Mystery / Thriller' },
    { name: 'Non-Fiction' },
    { name: 'Paranormal' },
    { name: 'Poetry' },
    { name: 'Random' },
    { name: 'Romance' },
    { name: 'Science Fiction' },
    { name: 'Short Story' },
    { name: 'Spiritual' },
    { name: 'Teen Fiction' },
    { name: 'Vampire' },
    { name: 'Werewolf' },
  ];
  language: string;
  message: string;
  imagePath: any;
  url: string | ArrayBuffer;
  selectedFile: File;

  constructor(
    private storyService: StoryService,
    private messageService: MessageService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onBasicUpload(e) {
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

  onClickSave() {
    if (this.title) {
      if (this.description) {
        if (this.mainCharecter) {
          if (this.selectedCategory) {
            const formData = new FormData();
            formData.append(
              'images',
              this.selectedFile,
              this.selectedFile.name
            );
            formData.append('userId', localStorage.getItem('userId'));
            formData.append('title', this.title);
            formData.append('description', this.description);
            formData.append('mainCharecters', this.mainCharecter);
            formData.append('category', this.selectedCategory.name);
            formData.append('tags', this.tags);
            formData.append(
              'language',
              this.language ? this.language : 'English'
            );
            this.storyService.newStory(formData).subscribe(
              (res) => {
                console.log(res);
                if (res.status) {
                  this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Story has been sucessfully added',
                  });
                  this.route.navigateByUrl('/mainstory/' + res.storyId);
                }
              },
              (err) => {
                console.log(err);
              }
            );
          }
        }
      }
    }
  }
  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }
}
