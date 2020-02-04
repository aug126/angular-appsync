/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateProductInput = {
  id?: string | null;
  name: string;
  supplierName: string;
  description?: string | null;
  imageUrl?: string | null;
  _version?: number | null;
  productCategoryId?: string | null;
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null;
  supplierName?: ModelStringInput | null;
  description?: ModelStringInput | null;
  imageUrl?: ModelStringInput | null;
  and?: Array<ModelProductConditionInput | null> | null;
  or?: Array<ModelProductConditionInput | null> | null;
  not?: ModelProductConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateProductInput = {
  id: string;
  name?: string | null;
  supplierName?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  _version?: number | null;
  expectedVersion: number;
  productCategoryId?: string | null;
};

export type DeleteProductInput = {
  id?: string | null;
  _version?: number | null;
  expectedVersion: number;
};

export type CreateCategoryInput = {
  id?: string | null;
  name: string;
  _version?: number | null;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
  _version?: number | null;
  expectedVersion: number;
};

export type DeleteCategoryInput = {
  id?: string | null;
  _version?: number | null;
  expectedVersion: number;
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  supplierName?: ModelStringInput | null;
  description?: ModelStringInput | null;
  imageUrl?: ModelStringInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type CreateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  supplierName: string;
  description: string | null;
  imageUrl: string | null;
  category: {
    __typename: "Category";
    id: string;
    name: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    version: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type UpdateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  supplierName: string;
  description: string | null;
  imageUrl: string | null;
  category: {
    __typename: "Category";
    id: string;
    name: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    version: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type DeleteProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  supplierName: string;
  description: string | null;
  imageUrl: string | null;
  category: {
    __typename: "Category";
    id: string;
    name: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    version: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type SyncProductsQuery = {
  __typename: "ModelProductConnection";
  items: Array<{
    __typename: "Product";
    id: string;
    name: string;
    supplierName: string;
    description: string | null;
    imageUrl: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    version: number;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetProductQuery = {
  __typename: "Product";
  id: string;
  name: string;
  supplierName: string;
  description: string | null;
  imageUrl: string | null;
  category: {
    __typename: "Category";
    id: string;
    name: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    version: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type ListProductsQuery = {
  __typename: "ModelProductConnection";
  items: Array<{
    __typename: "Product";
    id: string;
    name: string;
    supplierName: string;
    description: string | null;
    imageUrl: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    version: number;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncCategoriesQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    name: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    version: number;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type ListCategorysQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    name: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    version: number;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type OnCreateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  supplierName: string;
  description: string | null;
  imageUrl: string | null;
  category: {
    __typename: "Category";
    id: string;
    name: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    version: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type OnUpdateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  supplierName: string;
  description: string | null;
  imageUrl: string | null;
  category: {
    __typename: "Category";
    id: string;
    name: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    version: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type OnDeleteProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  supplierName: string;
  description: string | null;
  imageUrl: string | null;
  category: {
    __typename: "Category";
    id: string;
    name: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    version: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  version: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProduct(
    input: CreateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<CreateProductMutation> {
    const statement = `mutation CreateProduct($input: CreateProductInput!, $condition: ModelProductConditionInput) {
        createProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          supplierName
          description
          imageUrl
          category {
            __typename
            id
            name
            _version
            _deleted
            _lastChangedAt
            version
          }
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProductMutation>response.data.createProduct;
  }
  async UpdateProduct(
    input: UpdateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<UpdateProductMutation> {
    const statement = `mutation UpdateProduct($input: UpdateProductInput!, $condition: ModelProductConditionInput) {
        updateProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          supplierName
          description
          imageUrl
          category {
            __typename
            id
            name
            _version
            _deleted
            _lastChangedAt
            version
          }
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProductMutation>response.data.updateProduct;
  }
  async DeleteProduct(
    input: DeleteProductInput,
    condition?: ModelProductConditionInput
  ): Promise<DeleteProductMutation> {
    const statement = `mutation DeleteProduct($input: DeleteProductInput!, $condition: ModelProductConditionInput) {
        deleteProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          supplierName
          description
          imageUrl
          category {
            __typename
            id
            name
            _version
            _deleted
            _lastChangedAt
            version
          }
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProductMutation>response.data.deleteProduct;
  }
  async CreateCategory(
    input: CreateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!, $condition: ModelCategoryConditionInput) {
        createCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!, $condition: ModelCategoryConditionInput) {
        updateCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!, $condition: ModelCategoryConditionInput) {
        deleteCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async SyncProducts(
    filter?: ModelProductFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncProductsQuery> {
    const statement = `query SyncProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncProducts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            supplierName
            description
            imageUrl
            _version
            _deleted
            _lastChangedAt
            version
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncProductsQuery>response.data.syncProducts;
  }
  async GetProduct(id: string): Promise<GetProductQuery> {
    const statement = `query GetProduct($id: ID!) {
        getProduct(id: $id) {
          __typename
          id
          name
          supplierName
          description
          imageUrl
          category {
            __typename
            id
            name
            _version
            _deleted
            _lastChangedAt
            version
          }
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProductQuery>response.data.getProduct;
  }
  async ListProducts(
    filter?: ModelProductFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProductsQuery> {
    const statement = `query ListProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String) {
        listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            supplierName
            description
            imageUrl
            _version
            _deleted
            _lastChangedAt
            version
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProductsQuery>response.data.listProducts;
  }
  async SyncCategories(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCategoriesQuery> {
    const statement = `query SyncCategories($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCategories(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            _version
            _deleted
            _lastChangedAt
            version
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCategoriesQuery>response.data.syncCategories;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          name
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategorys(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategorysQuery> {
    const statement = `query ListCategorys($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            _version
            _deleted
            _lastChangedAt
            version
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategorysQuery>response.data.listCategorys;
  }
  OnCreateProductListener: Observable<
    OnCreateProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProduct {
        onCreateProduct {
          __typename
          id
          name
          supplierName
          description
          imageUrl
          category {
            __typename
            id
            name
            _version
            _deleted
            _lastChangedAt
            version
          }
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`
    )
  ) as Observable<OnCreateProductSubscription>;

  OnUpdateProductListener: Observable<
    OnUpdateProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProduct {
        onUpdateProduct {
          __typename
          id
          name
          supplierName
          description
          imageUrl
          category {
            __typename
            id
            name
            _version
            _deleted
            _lastChangedAt
            version
          }
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`
    )
  ) as Observable<OnUpdateProductSubscription>;

  OnDeleteProductListener: Observable<
    OnDeleteProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProduct {
        onDeleteProduct {
          __typename
          id
          name
          supplierName
          description
          imageUrl
          category {
            __typename
            id
            name
            _version
            _deleted
            _lastChangedAt
            version
          }
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`
    )
  ) as Observable<OnDeleteProductSubscription>;

  OnCreateCategoryListener: Observable<
    OnCreateCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategory {
        onCreateCategory {
          __typename
          id
          name
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`
    )
  ) as Observable<OnCreateCategorySubscription>;

  OnUpdateCategoryListener: Observable<
    OnUpdateCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategory {
        onUpdateCategory {
          __typename
          id
          name
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`
    )
  ) as Observable<OnUpdateCategorySubscription>;

  OnDeleteCategoryListener: Observable<
    OnDeleteCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategory {
        onDeleteCategory {
          __typename
          id
          name
          _version
          _deleted
          _lastChangedAt
          version
        }
      }`
    )
  ) as Observable<OnDeleteCategorySubscription>;
}
