import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home.component';
import { CallbackComponent } from './callback.component';

const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
