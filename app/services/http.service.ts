import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Recipe, RecipeDTO} from "../recipe";

import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(private _http: Http) { }
    temp: any;

    private _buildUrl(id: number) {
        var bookId = '573a1f5bd49a9d0300e3d242/recipes';
        var baseUrl = 'https://api.fieldbook.com/v1/';
        var url = baseUrl + bookId;
        if (id == null) {
            return url;
        }

        return url + "/" + id;
    }

    private _buildOptions(content: boolean) {
        var creds = 'Basic ' + btoa('key-1:drbVrkWsuh8Vp06lEbGw');
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        if (content) {
            headers.append('Content-Type', 'application/json');
        }
        headers.append('Authorization', creds);

        var options = new RequestOptions({ headers: headers });
        return options;
    }


    private _mapFromDTO(rec: RecipeDTO) {
        var r = new Recipe();
        r.id = +rec.id.split(" ")[1];
        r.showed = rec.showed == 1;
        r.text = rec.text;
        r.title = rec.title;

        return r;
    }

    private _mapFromDTOs(recs: RecipeDTO[]) {
        var recipes: Recipe[] = [];
        recs.forEach(element => {
            var r = this._mapFromDTO(element);
            recipes.push(r);
        });

        return recipes;
    }

    private _mapToDTO(rec: Recipe) {
        var dto = new RecipeDTO();
        dto.showed = rec.showed ? 1 : 0;
        dto.text = rec.text;
        dto.title = rec.title;

        return dto;
    }

    getAllRecipes(): Observable<Recipe[]> {
        var url = this._buildUrl(null);
        var options = this._buildOptions(false);

        return this._http.get(url, options).map(res => this._mapFromDTOs(res.json()));
    }

    addRecipe(newRecipe: Recipe) {
        var url = this._buildUrl(null);
        var options = this._buildOptions(true);

        var dto = this._mapToDTO(newRecipe);
        dto.date = new Date().toJSON().slice(0, 10);
        var body = JSON.stringify(dto);
        console.log(body);

        return this._http.post(url, body, options).map(res => res.json());
    }

    updateRecipe(recipe: Recipe, id: number) {
        var url = this._buildUrl(id);
        var options = this._buildOptions(true);

        var dto = this._mapToDTO(recipe);
        dto.date = new Date().toJSON().slice(0, 10);
        var body = JSON.stringify(dto);

        return this._http.patch(url, body, options).map(res => res.json());
    }

    deleteRecipe(id: number) {
        var url = this._buildUrl(id);
        var options = this._buildOptions(false);
        console.log('remove');
        return this._http.delete(url, options);
    }
}