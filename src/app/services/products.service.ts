import { Injectable } from "@angular/core";

import * as mutations from "../app-sync/src/graphql/mutations";
import * as queries from "../app-sync/src/graphql/queries";

import gql from "graphql-tag";

import { client } from "../init-client";
import { from } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";

import * as models from "../app-sync/src/models";
import {
  UpdateProductInput,
  CreateProductInput,
  DeleteProductInput,
  ListProductsQuery,
} from "../app-sync/src/app/API2.services";
import { APIService } from '../API2.services';

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  _client = client;
  productQuery;

  constructor() {}

  getAllProducts() {
    this.productQuery = this._client.watchQuery<ListProductsQuery>({
      query: gql([queries.ListProducts]),
      // fetchPolicy: "cache-and-network",
      variables: {
        limit: 100,
        // filter: {
          // ! _deleted ne se trouve pas dans ModelProductFilterInput
          // _deleted: {
          //   eq: null
          // }
        // }
      }
    });
    return from(this.productQuery).pipe(
      map((d: any) => {
        console.log(d);
        if (d.data.listProducts)
          return d.data.listProducts.items
        return [];
      })
    );
  }

  createProduct(product: CreateProductInput) {
    return from(
      this._client.mutate<models.Product[]>({
        mutation: gql([mutations.CreateProduct]),
        variables: {
          input: product
        }
      })
    )
    // .pipe(tap(() => this.productQuery.refetch()));
  }

  updateProduct(product: UpdateProductInput) {
    console.log('produt à update : ', product)
    return from(
      this._client.mutate<models.Product[]>({
        mutation: gql([mutations.UpdateProduct]),
        variables: {
          input: product
        }
      })
    );
  }

  deleteProduct(productId: DeleteProductInput) {
    return from(
      this._client.mutate<models.Product>({
        mutation: gql([mutations.DeleteProduct]),
        variables: {
          input: productId
        }
      })
    ).pipe(tap(() => this.productQuery.refetch()));;
  }
}
