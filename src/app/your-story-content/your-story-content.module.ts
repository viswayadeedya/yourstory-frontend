import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourStoryContentComponent } from './your-story-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PrimeUiModule } from '../shared/prime-ui/prime-ui.module';
import { AboutComponent } from './about/about.component';

import { WriteComponent } from './write/write.component';
import { YourStoryRoutingModule } from './your-story-routing.module';
import { MainStoryComponent } from './main-story/main-story.component';
import { FullStoryComponent } from './full-story/full-story.component';

@NgModule({
  declarations: [
    YourStoryContentComponent,
    HomeComponent,
    AboutComponent,
    WriteComponent,
    MainStoryComponent,
    FullStoryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeUiModule,
    HttpClientModule,
    YourStoryRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [YourStoryContentComponent, HomeComponent],
})
export class YourStoryContentModule {}
