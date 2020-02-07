import { Component, OnInit } from '@angular/core';

import gql from 'graphql-tag';

import * as queries from '../app-sync/src/graphql/queries';
import * as mutations from '../app-sync/src/graphql/mutations';
import { of, from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { client } from "../init-client"
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';
import { CreateProductInput } from '../API2.services';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  products$ = from(client.watchQuery({
    query: gql([queries.ListProducts]),
    // fetchPolicy: ''
  }))
  .pipe(
    map((res: any) => res.data.listProducts.items)
  );

  constructor(
    private catSvc: CategoriesService,
    private prodSvc: ProductsService
  ) {}

  ngOnInit() {
    // this.testParamListProductQuery("Test");
  }

  // CEDRIC

  // AUGUSTIN

  testSimpleListProductQuery() {
    console.time("testSimpleListProductQuery");
    client
      .query({
        query: gql([queries.ListProducts])
      })
      .then(data => {
        console.timeEnd("testSimpleListProductQuery");
        console.log(data);
      });
  }

  testParamListProductQuery(nameContains) {
    console.time("testParamListProduct")
    client
      .query({
        query: gql([queries.ListProducts]),
        variables: {
          filter: {
            name: {contains: nameContains}
          }
        }
      })
      .then(
        r => console.log(r)
      )
    console.timeEnd("testParamListProduct")
  }

  testCreateSimpleProduct() {
    console.time('testListProductQuery');

    client
      .mutate({
        mutation: gql([mutations.CreateProduct]),
        variables: {
          input: {
            name: 'Test Product Mutation',
            supplierName: 'supplier',
          }
        },
      })
      .then(data => {
        console.timeEnd('testListProductQuery');
        console.log(data);
      });
  }

  createCategory() {
    this.catSvc.createCategory({name: "Catégorie for Product"}).subscribe(
      (data) => {
        const product: CreateProductInput = {
          name: "Produit with categoy",
          supplierName: "supplier",
          productCategoryId: data.data.createCategory.id
        }
          this.prodSvc.createProduct(product).subscribe(p => console.log(p))
      }
    )
  }
  

  // testSyncAppsync() {
  //   client.sync(
  //   buildSync("Product", {
  //     baseQuery: {
  //       query: queries.listProducts 
  //     } as any,
  //     // subscriptionQuery: {
  //     //   query: DeltaSync.Subscription
  //     // },
  //     // deltaQuery: {
  //     //   query: DeltaSync.DeltaSync
  //     // },
  //     // cacheUpdates: ( deltaRecord  ) => {
  //     //   const id = deltaRecord.id;
  //     //   return [{ query: DeltaSync.GetItem, variables: { id: id } }];
  //     // }
  //   })
  // )
  // }
}
