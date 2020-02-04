import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as RxDB from 'rxdb';
RxDB.plugin(require('pouchdb-adapter-idb'));

/** Amplify */
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { DataStore } from '@aws-amplify/datastore';
DataStore.configure(awsconfig);
Amplify.configure(awsconfig);
/** End Amplify */

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(_ => RxDB.create({
    name: 'ssdb',           // <- name
    adapter: 'idb',          // <- storage-adapter
    multiInstance: true,         // <- multiInstance (optional, default: true)
    queryChangeDetection: false // <- queryChangeDetection (optional, default: false)
  }))
  .then(db => console.log(db))
  .catch(err => console.error(err));
