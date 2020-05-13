import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective implements OnInit {
    @HostBinding('class.open') isOpen: boolean;

    constructor() {
        this.isOpen = false;
    }

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    ngOnInit() {

    }
}
