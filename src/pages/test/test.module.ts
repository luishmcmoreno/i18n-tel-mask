import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    TestPage,
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
    DirectivesModule,
  ],
})
export class TestPageModule {}
