import { Component, Input } from '@angular/core';

@Component({
    selector: 'l-button',
    templateUrl: '../templates/button.html'
})

export class ButtonComponent {
    @Input() click: Function;
    @Input() type: string;
    @Input() icon: string;
    @Input() disabled: boolean;

    constructor(){
        this.disabled = false;
        this.type = "button";
        this.icon = "leaf";
    }

    onClick(){
        if(this.click){
            this.click();
        }
    }
}
