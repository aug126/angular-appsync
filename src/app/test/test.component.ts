import { Component, OnInit } from "@angular/core";

import gql from "graphql-tag";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";

import awsconfig from "../app-sync/src/aws-exports";

import * as queries from "../app-sync/src/graphql/queries";
import * as mutations from "../app-sync/src/graphql/mutations";
import { Auth } from "aws-amplify";

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
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // CEDRIC

  // AUGUSTIN

  testSimpleListProductQuery() {
    console.time("testListProductQuery");
    client
      .query({
        query: gql([queries.listProducts])
      })
      .then(data => {
        console.timeEnd("testListProductQuery");
        console.log(data);
      });
  }

  testCreateSimpleProduct() {
    console.time("testListProductQuery");

    client
      .mutate({
        mutation: gql([mutations.createProduct]),
        variables: {
          input: {
            name: "Test Product Mutation",
            supplierName: "supplier"
          }
        }
      })
      .then(data => {
        console.timeEnd("testListProductQuery");
        console.log(data);
      });
  }
}
