import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsCourseComponent } from './pages/contacts-course/contacts-course.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsCourseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
