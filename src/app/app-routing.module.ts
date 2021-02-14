import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFountPageComponent } from './core/pages/not-fount-page/not-fount-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: '**',
    component: NotFountPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
