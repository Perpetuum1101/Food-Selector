import { IEntity } from './ientity';

export class Ingredient implements IEntity {
    id: number;
    name: string;
}

export class IngredientDTO {
    id: string;
    name: string;
}

export class RecipeIngredient implements IEntity {
    id: number;
    ingredientId: number;
    recipeId: number;
    amount: string;
    name: string;
}

export class RecipeIngredientDTO {
    id: string;
    amount: string;
    ingridient: DTOBase[];
    recipe: DTOBase[]; 
}

export class DTOBase{
    id: string;
}