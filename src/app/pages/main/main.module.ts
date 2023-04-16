import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
        title: 'Dunav',
      },
    ],
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TranslateModule],
})
export class MainModule {}
