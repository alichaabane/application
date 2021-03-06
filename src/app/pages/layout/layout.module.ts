import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { WorkComponent } from './work/work.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import {ApiService} from "../../shared/services/api.service";



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, WorkComponent, BlogComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  providers: [ApiService]
})
export class LayoutModule { }
