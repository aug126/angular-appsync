import { Injectable } from "@angular/core";
import client from "../app-sync/init-client";
import gql from "graphql-tag";
import {
  ListProductsQuery,
  ModelProductFilterInput,
  SearchableProductFilterInput,
  SearchableProductSortInput,
  SearchProductsQuery,
  GetProductQuery
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
  listProducts(
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

  searchProducts(
    variables?: {
      filter?: SearchableProductFilterInput;
      sort?: SearchableProductSortInput;
      limit?: number;
      nextToken?: string;
    },
    fetchPolicy?: FetchPolicy
  ): Observable<SearchProductsQuery> {
    const searchProducts = [
      `query SearchProducts(
        $filter: SearchableProductFilterInput
        $sort: SearchableProductSortInput
        $limit: Int
        $nextToken: String
      ) {
        searchProducts(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
        ) {
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
          total
        }
      }
      `
    ];
    return from(
      client.query<{ searchProducts: SearchProductsQuery }>({
        query: gql(searchProducts),
        variables,
        fetchPolicy
      })
    ).pipe(map(r => r.data.searchProducts));
  }

  getProduct(
    variables?: {
      id: string;
    },
    fetchPolicy?: FetchPolicy
  ) {
    const getProduct = [
      `query GetProduct($id: ID!) {
        getProduct(id: $id) {
          id
          name
          supplierName
          description
          imageUrl
          ` + // ! category give an erreur ...
        /* category {
            id
            name
            _version
            _deleted
            _lastChangedAt
          } */
        `_version
          _deleted
          _lastChangedAt
        }
      }`
    ];

    return from(
      client.query<{ getProduct: GetProductQuery }>({
        query: gql(getProduct),
        variables,
        fetchPolicy
      })
    ).pipe(map(d => d.data.getProduct));
  }

  createProduct() {}

  updateProduct() {}

  deleteProduct() {}
}
