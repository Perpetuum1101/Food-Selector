import { Component, OnInit, Input } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { Recipe } from '../entities/recipe';
import { ListModel, ColumnType } from '../entities/listModel';

@Component({
    selector: 'list-content',
    templateUrl: './app/templates/list.html'
})

export class ListComponent implements OnInit {
    @Input() 
    listParams: ListModel;
    public colType = ColumnType;

    constructor() { }

    ngOnInit() {  }

    onSelect(id: number) {
        this.listParams.editCallback(id);
    }

    onDelete(id: number) {
        this.listParams.deleteCallback(id);
    }
}