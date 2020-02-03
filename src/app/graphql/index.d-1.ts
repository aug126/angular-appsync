import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly supplierName: string;
  readonly description?: string;
  readonly imageUrl?: string;
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}