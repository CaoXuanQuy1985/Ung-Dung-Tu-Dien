import {PreloadAllModules, Router, RouterModule, Routes} from '@angular/router';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {NgModule} from '@angular/core';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetaiComponent} from './dictionary-detai/dictionary-detai.component';
import {AuthGuard} from './auth.guard';
import {LoginStep1Component} from './login-step1/login-step1.component';
import {LoginStep2Component} from './login-step2/login-step2.component';

const routes: Routes = [
  {
    path: 'dictionary',
    /*component: DictionaryComponent*/
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetaiComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'login-step-1',
    component: LoginStep1Component
  },
  {
    path: 'login-step-2',
    component: LoginStep2Component
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
