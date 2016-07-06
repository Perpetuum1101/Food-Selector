export class ListModel {
    editCallback: Function;
    deleteCallback: Function;
    headers: string[];
    items: ListItem[][];
}

export class ListItem {
    constructor(value: string, type: ColumnType = ColumnType.Text) {
        this.type = type;
        this.value = value;
    }

    type: ColumnType;
    value: string;
}

export enum ColumnType {
    Icon,
    Text
}