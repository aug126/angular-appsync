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
  DeleteProductInput
} from "../API2.services";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  _client = client;
  productQuery;

  constructor() {}

  getAllProducts() {
    this.productQuery = this._client.watchQuery<any>({
      query: gql([queries.ListProducts]),
      variables: {
        limit: 100
      }
    });

    return from(this.productQuery).pipe(
      map((d: any) => d.data.listProducts.items)
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
