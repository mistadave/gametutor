import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./view/view.module').then(m => m.ViewModule) },
  {
    path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule), canActivate: [],
    data: { roles: ['admin'] }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
