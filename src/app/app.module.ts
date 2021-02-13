import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { CourseListPagesComponent } from './module/admin/pages/course-list-pages/course-list-pages.component';
// import { CourseCreatePagesComponent } from './module/admin/pages/course-create-pages/course-create-pages.component';
// import { CourseEditPagesComponent } from './module/admin/pages/course-edit-pages/course-edit-pages.component';
// import { LoginPageComponent } from './module/auth/pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    // CourseListPagesComponent,
    // CourseCreatePagesComponent,
    // CourseEditPagesComponent,
    // LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
