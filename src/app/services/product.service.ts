import { Injectable } from '@angular/core';
import { APIService } from '../API.services';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../app-sync/src/models';
import { API } from 'aws-amplify';



@Injectable({ providedIn: 'root' })
export class ProductService {

  // private _productList$  = new BehaviorSubject([]);
  // productList$: Observable<Product>;
  // oneCache = new Map();

  // constructor(private apiSrv: APIService) {}



  // queryOne() {
  //   const entity = API.graphql(`whatever`);
  //   this.oneCache.set(entity.id, entity);
  // }
}
