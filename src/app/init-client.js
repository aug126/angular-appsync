import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "./app-sync/src/aws-exports";
import { Auth } from "aws-amplify";
import  gql  from "graphql-tag";
import * as queries from "./app-sync/src/graphql/queries";

export const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS, // authentication type in awsconfig.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken()
  }
});

client.sync(
  // buildSync("Product", {
  {
    baseQuery: {
      query: gql([queries.ListProducts]),
      variables: {
        limit: 1000
      },
      update: null
    }
    // subscriptionQuery: {
    //   query: DeltaSync.Subscription
    // },
    // deltaQuery: {
    //   query: DeltaSync.DeltaSync
    // },
    // cacheUpdates: ( deltaRecord  ) => {
    //   const id = deltaRecord.id;
    //   return [{ query: DeltaSync.GetItem, variables: { id: id } }];
    // }
  }
);
