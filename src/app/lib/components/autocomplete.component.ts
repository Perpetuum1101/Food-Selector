import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'l-autocomplete',
    templateUrl: '../templates/autocomplete.html'
})
export class AutocompleteComponent {
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
        console.log('change');
        this.model = newValue;
        this.modelChange.emit(this.model);
    }
}
