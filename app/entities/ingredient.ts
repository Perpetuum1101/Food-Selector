import { IEntity } from './ientity';

export class Ingredient implements IEntity {
    id: number;
    name: string;
}

export class IngredientDTO {
    id: string;
    name: string;
}