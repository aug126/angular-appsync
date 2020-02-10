import { Injectable } from "@angular/core";

import * as mutations from "../app-sync/src/graphql/mutations";
import * as queries from "../app-sync/src/graphql/queries";

import gql from "graphql-tag";

import { AppsyncClientService } from "../services/appsync-client.service";
import { from } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";

import * as models from "../app-sync/src/models";
import {
  UpdateProductInput,
  CreateProductInput,
  DeleteProductInput,
  ListProductsQuery
} from "../app-sync/src/app/API2.services";
import { APIService } from "../API2.services";

import { uuid } from "uuid";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  productQuery;

  constructor(
    private clientSvc: AppsyncClientService
  ) {}

  getAllProducts() {
    this.productQuery = this.clientSvc.client.watchQuery<ListProductsQuery>({
      query: gql([queries.ListProducts]),
      // fetchPolicy: "cache-and-network",
      // fetchPolicy: "cache-only",
      variables: {
        limit: 1000
        // filter: {
        // ! _deleted is not in ModelProductFilterInput
        // _deleted: {
        //   eq: null
        // }
        // }
      }
    });
    return from(this.productQuery).pipe(
      map((d: any) => {
        console.log('list of products : ', d);
        if (d.data.listProducts) return d.data.listProducts.items;
        return [];
      })
    );
  }

  createProduct(product: any) {
    product._version = 1;
    return from(
      this.clientSvc.client.mutate<models.Product[]>({
        mutation: gql([mutations.CreateProduct]),
        variables: {
          input: product
        },
        optimisticResponse: {
        __typename: 'Mutation',
        createProduct: {
          ...product,
          __typename: 'Product',
        },
      },
        update: (store, { data: { createProduct } }) => {
          // Read the data from our cache for this query.
          const query = gql([queries.ListProducts]);
          const data: any = store.readQuery({
            query,
            variables: { limit: 1000 }
          });
          // Add our comment from the mutation to the end.
          data.listProducts.items = [...data.listProducts.items, createProduct];
          // Write our data back to the cache.
          store.writeQuery({ query, data, variables: { limit: 1000 } });
        },



        // optimisticResponse: () => {
        //   let id = uuid()
        //   return {
        //     __typename: "Product",
        //     createProduct: {
        //       // __typename: "Product", // This type must match the return type of the query below (listTodos)
        //       id,
        //       name: product.name,
        //       description: product.description,
        //       supplierName: product.supplierName
        //     }
        //   };
        // }
      })
    ).pipe(tap(() => {
      console.log('on refetch ', this.productQuery)
      return  this.productQuery.refetch()
    }));
  }

  updateProduct(product: UpdateProductInput) {
    console.log("produt à update : ", product);
    return from(
      this.clientSvc.client.mutate<models.Product[]>({
        mutation: gql([mutations.UpdateProduct]),
        variables: {
          input: product
        }
      })
    );
  }

  deleteProduct(productId: DeleteProductInput) {
    return from(
      this.clientSvc.client.mutate<models.Product>({
        mutation: gql([mutations.DeleteProduct]),
        variables: {
          input: productId
        }
      })
    ).pipe(tap(() => this.productQuery.refetch()));
  }
}
