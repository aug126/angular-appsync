
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "./app-sync/src/aws-exports";
import { Auth } from "aws-amplify";



export const client = new AWSAppSyncClient({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth: {
      type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS, // authentication type in awsconfig.aws_appsync_authenticationType,
      jwtToken: async () =>
        (await Auth.currentSession()).getIdToken().getJwtToken()
    }
  });