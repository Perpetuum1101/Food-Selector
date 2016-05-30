export class Recipe {
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