import { Injectable } from '@angular/core';
import { DataStore } from "@aws-amplify/datastore";
import { Category, Product } from '../app-sync/src/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestDataStoreService {

  constructor() {
    // Initialise DataStore avec une action "vide"
    DataStore.query<Category>(Category);
  }

  getAllProducts() {
    return DataStore.query<Product>(Product)
    .then(r => console.log(r));
  }

}
