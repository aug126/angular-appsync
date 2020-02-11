import { Injectable } from "@angular/core";
import client from "../app-sync/init-client";
import gql from "graphql-tag";
import {
  ListProductsQuery,
  ModelProductFilterInput,
  SearchableProductFilterInput,
  SearchableProductSortInput,
  SearchProductsQuery,
  GetProductQuery,
  DeleteProductInput,
  ModelProductConditionInput,
  DeleteProductMutation,
  UpdateProductInput
} from "../app-sync/app/API2.services.service";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { FetchPolicy } from "apollo-client";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor() {}

  /** ===== QUERIES ===== */
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
    variables: {
      id: string;
    },
    fetchPolicy?: FetchPolicy
  ): Observable<GetProductQuery> {
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

  /** ===== MUTATIONS ===== */
  createProduct() {}

  updateProduct(
    variables: {
      input: UpdateProductInput;
      condition?: ModelProductConditionInput;
    },
    fetchPolicy?: FetchPolicy
  ) {
    const updateProduct = [
      `mutation UpdateProduct(
        $input: UpdateProductInput!
        $condition: ModelProductConditionInput
      ) {
        updateProduct(input: $input, condition: $condition) {
          id
          name
          supplierName
          description
          imageUrl
          ` +
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
      client.mutate({
        mutation: gql(updateProduct),
        variables,
        fetchPolicy
      })
    );
  }

  deleteProduct(
    variables: {
      input: DeleteProductInput;
      condition?: ModelProductConditionInput;
    },
    fetchPolicy?: FetchPolicy
  ): Observable<DeleteProductMutation> {
    const deleteProduct = [
      `mutation DeleteProduct(
        $input: DeleteProductInput!
        $condition: ModelProductConditionInput
      ) {
        deleteProduct(input: $input, condition: $condition) {
          id
          name
          supplierName
          description
          imageUrl
          ` +
        /* category { // ! The category give an error
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
      client.mutate<{ deleteProduct: DeleteProductMutation }>({
        mutation: gql(deleteProduct),
        variables,
        fetchPolicy
      })
    ).pipe(map(d => d.data.deleteProduct));
  }
}
