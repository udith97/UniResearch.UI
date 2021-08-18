import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './side-navigation/side-navigation.component'
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';

export const declareations = [SideNavigationComponent,TopNavigationComponent]
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [declareations],
  exports: [declareations]
})
export class SharedModule { }
