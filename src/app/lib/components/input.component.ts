import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'l-input',
    templateUrl: '../templates/input.html'
})
export class InputComponent {
    @Input() name: string;
    @Input() label: string;
    @Input() model: any;
    @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

    @Input() required: boolean;

    constructor() {
        this.label = "no label"
        this.required = false;
    }

    onChange(newValue: any) {
        this.model = newValue;
        this.modelChange.emit(this.model);
    }
}
