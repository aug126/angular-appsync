import { Injectable } from '@angular/core';
import { client } from "../init-client";
import gql from 'graphql-tag';
import * as mutations from "../app-sync/src/graphql/mutations";
import { Category } from '../app-sync/src/models';
import { CreateCategoryInput } from '../API2.services';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  _client = client;
  createCategory(category: CreateCategoryInput) {
    return from(this._client.mutate<Category>({
      mutation: gql([mutations.CreateCategory]),
      variables: {
        input: category
      }
    }));
  }

  constructor() { }
}

