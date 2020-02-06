import { Component, OnInit } from '@angular/core';

import gql from 'graphql-tag';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

import awsconfig from '../app-sync/src/aws-exports';

import * as queries from '../app-sync/src/graphql/queries';
import * as mutations from '../app-sync/src/graphql/mutations';
import { Auth } from 'aws-amplify';
import { of, from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS, // authentication type in awsconfig.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken()
  }
});

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  products$ = from(client.watchQuery({
    query: gql([queries.listProducts]),
    // fetchPolicy: ''
  }))
  .pipe(
    map((res: any) => res.data.listProducts.items)
  );

  constructor() {}

  ngOnInit() {
    // this.testParamListProductQuery("Test");
  }

  // CEDRIC

  // AUGUSTIN

  testSimpleListProductQuery() {
    console.time("testSimpleListProductQuery");
    client
      .query({
        query: gql([queries.listProducts])
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
        query: gql([queries.listProducts]),
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
        mutation: gql([mutations.createProduct]),
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
