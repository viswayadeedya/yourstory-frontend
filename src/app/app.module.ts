import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PrimeUiModule } from './shared/prime-ui/prime-ui.module';
import { YourStoryContentModule } from './your-story-content/your-story-content.module';
import { ButtonComponent } from './shared/button/button.component';
import { AuthTokenInterceptor } from './services/interceptor.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent, NavComponent, ButtonComponent, LoginComponent],
  imports: [
    BrowserModule,
    PrimeUiModule,
    FormsModule,
    YourStoryContentModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
