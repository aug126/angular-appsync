import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/** Amplify */
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { DataStore } from '@aws-amplify/datastore';
DataStore.configure({
  maxRecordsToSync: 15
});
Amplify.configure(awsconfig);
/** End Amplify */

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
