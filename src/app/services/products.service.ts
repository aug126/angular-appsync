import { Injectable } from "@angular/core";
import client from "../app-sync/init-client";
import gql from "graphql-tag";
import {
  ListProductsQuery,
  ModelProductFilterInput
} from "../app-sync/app/API2.services.service";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { FetchPolicy } from "apollo-client";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor() {}

  /** QUERIES */
  ListProducts(
    variables?: {
      filter?: ModelProductFilterInput;
      limit?: number;
      nextToken?: string;
    },
    fetchPolicy?: FetchPolicy
  ): Observable<ListProductsQuery> {
    const listProducts = [
      `query ListProducts(
        $filter: ModelProductFilterInput
        $limit: Int
        $nextToken: String
      ) {
        listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          items {
            id
            name
            supplierName
            description
            imageUrl
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`
    ];
    return from(
      client.query<{ listProducts: ListProductsQuery }>({
        query: gql(listProducts),
        variables,
        fetchPolicy
      })
    ).pipe(map(r => r.data.listProducts));
  }

  createProduct() {}

  updateProduct() {}

  deleteProduct() {}
}
