import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "./aws-exports";
import { Auth } from "aws-amplify";

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE[awsconfig.aws_appsync_authenticationType],
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken()
  }
});

export default client;
