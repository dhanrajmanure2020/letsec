﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AgentposService } from '@app/_services';

@Component({ templateUrl: 'layout.component.html' })

export class LayoutComponent {
    constructor(
        private router: Router,
        private agentposService: AgentposService
    ) {
        // redirect to home if already logged in
        // if (this.agentposService) {
        // this.router.navigate(['agentkyc']);
        // }
    }
}