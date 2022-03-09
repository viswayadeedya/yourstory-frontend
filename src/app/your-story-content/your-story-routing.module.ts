import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FullStoryComponent } from './full-story/full-story.component';
import { HomeComponent } from './home/home.component';
import { MainStoryComponent } from './main-story/main-story.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: 'write', component: WriteComponent },
  { path: 'mainstory/:storyId', component: MainStoryComponent },
  { path: 'story-parts/:id', component: FullStoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourStoryRoutingModule {}
