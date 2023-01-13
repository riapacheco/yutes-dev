import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigOverridesComponent } from './views/config-overrides/config-overrides.component';
import { GettingStartedComponent } from './views/getting-started/getting-started.component';
import { UsageComponent } from './views/usage/usage.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'getting-started'
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent
  },
  {
    path: 'usage',
    component: UsageComponent
  },
  {
    path: 'config-overrides',
    component: ConfigOverridesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
