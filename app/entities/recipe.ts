import { IEntity } from './ientity';

export class Recipe  implements IEntity {
    id: number;
    title: string;
    text: string;
    showed: boolean;
}

export class RecipeDTO {
    id: string;
    title: string;
    text: string;
    date: string;
    showed: number;
}