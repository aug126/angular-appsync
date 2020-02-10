import { Injectable } from '@angular/core';
import { AppsyncClientService } from "../services/appsync-client.service";
import gql from 'graphql-tag';
import * as mutations from "../app-sync/src/graphql/mutations";
import { Category } from '../app-sync/src/models';
import { CreateCategoryInput } from '../API2.services';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(
    private clientSvc: AppsyncClientService
  ) { }

  createCategory(category: CreateCategoryInput) {
    return from(this.clientSvc.client.mutate<Category>({
      mutation: gql([mutations.CreateCategory]),
      variables: {
        input: category
      }
    }));
  }
}

