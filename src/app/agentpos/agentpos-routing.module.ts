import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentposComponent } from './agentpos.component';
import { AgentkycComponent } from './agentkyc.component';
import { LayoutComponent } from './layout.component';
import { AgentconfirmComponent } from './agentconfirm.component';

const routes: Routes = [
  {
    path: '', component: AgentposComponent,
    children: [
      { path: 'agentkyc', component: AgentkycComponent },
      { path: 'agentconfirm', component: AgentconfirmComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentposRoutingModule { }
