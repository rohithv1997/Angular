import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    collapsed = true;
    navbarCollapsed = true;

toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
}
}
