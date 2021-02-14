import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { LayoutAuthComponent } from './pages/layout-auth/layout-auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { SuscribeFormComponent } from './components/suscribe-form/suscribe-form.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LayoutAdminComponent,
    LayoutAuthComponent,
    FooterComponent,
    HeaderComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SuscribeFormComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
