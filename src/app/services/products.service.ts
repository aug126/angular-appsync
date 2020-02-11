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
  UpdateProductInput,
  UpdateProductMutation,
  CreateProductInput,
  CreateProductMutation
} from "../app-sync/app/API2.services.service";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { FetchPolicy } from "apollo-client";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  listProductsQuery: Array<string>;
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
    this.listProductsQuery = listProducts;
    return from(
      client.watchQuery<{ listProducts: ListProductsQuery }>({
        query: gql(listProducts),
        variables,
        fetchPolicy
      })
    ).pipe(
      map(r => r.data.listProducts),
      map(d => ({
        items: d.items.filter(p => !p._deleted), // hide the deleted products : should be on the backend
        __typename: d.__typename,
        nextToken: d.nextToken,
        startedAt: d.startedAt
      }))
    );
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
  createProduct(
    variables: {
      input: CreateProductInput;
      condition?: ModelProductConditionInput;
    },
    fetchPolicy?: FetchPolicy
  ): Observable<CreateProductMutation> {
    const createProduct = [
      `mutation CreateProduct(
        $input: CreateProductInput!
        $condition: ModelProductConditionInput
      ) {
        createProduct(input: $input, condition: $condition) {
          id
          name
          supplierName
          description
          imageUrl
          ` + // ! Category give an error
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
      client.mutate<CreateProductMutation>({
        mutation: gql(createProduct),
        variables,
        fetchPolicy
      })
    ).pipe(map(r => r.data.createProduct));
  }

  updateProduct(
    variables: {
      input: UpdateProductInput;
      condition?: ModelProductConditionInput;
    },
    fetchPolicy?: FetchPolicy
  ): Observable<UpdateProductMutation> {
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
      client.mutate<UpdateProductMutation>({
        mutation: gql(updateProduct),
        variables,
        fetchPolicy,
        optimisticResponse: {
          updateProduct: {
            __typename: "Product", // ! added because deleted for match the UpdateProductInput
            _deleted: false,
            _lastChangedAt: new Date(),
            ...variables.input
          }
        },
        update: (cache, { data: { updateProduct } }) => {
          const query = gql(this.listProductsQuery);

          // Read query from cache
          const data: { listProducts: ListProductsQuery } = cache.readQuery({
            query,
            variables: { limit: 1000 }
          });
          //Overwrite the cache with the new results
          cache.writeQuery({ query, data, variables: { limit: 1000 } });
        }
      })
    ).pipe(map(r => r.data.updateProduct));
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
