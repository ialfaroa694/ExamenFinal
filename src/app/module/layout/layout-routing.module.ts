import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { LayoutAuthComponent } from './pages/layout-auth/layout-auth.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    /*component: LayoutComponent,*/ /*Se implementará en el punto 1(d) del caso práctico*/
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(a => a.HomeModule)
      },
      {
        path: 'Courses',
        loadChildren: () => import('../courses/course.module').then(a => a.CourseModule)
      },
    ]
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
      },
    ]
  },
  {
    path: 'auth',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
