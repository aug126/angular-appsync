import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/** Amplify */
import Amplify from 'aws-amplify';
import awsconfig from './app/app-sync/src/aws-exports';
Amplify.configure(awsconfig);
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

/** End Amplify */

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
