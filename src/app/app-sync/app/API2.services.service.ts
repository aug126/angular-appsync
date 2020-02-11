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
  productCategoryId?: string | null;
};

export type DeleteProductInput = {
  id?: string | null;
  _version?: number | null;
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
};

export type DeleteCategoryInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateVoitureInput = {
  id: string;
  teamId: string;
  _version?: number | null;
};

export type ModelVoitureConditionInput = {
  and?: Array<ModelVoitureConditionInput | null> | null;
  or?: Array<ModelVoitureConditionInput | null> | null;
  not?: ModelVoitureConditionInput | null;
};

export type UpdateVoitureInput = {
  id: string;
  teamId: string;
  _version?: number | null;
};

export type DeleteVoitureInput = {
  teamId: string;
  id: string;
  _version?: number | null;
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

export type ModelVoitureFilterInput = {
  id?: ModelIDInput | null;
  teamId?: ModelIDInput | null;
  and?: Array<ModelVoitureFilterInput | null> | null;
  or?: Array<ModelVoitureFilterInput | null> | null;
  not?: ModelVoitureFilterInput | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type SearchableProductFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  supplierName?: SearchableStringFilterInput | null;
  description?: SearchableStringFilterInput | null;
  imageUrl?: SearchableStringFilterInput | null;
  and?: Array<SearchableProductFilterInput | null> | null;
  or?: Array<SearchableProductFilterInput | null> | null;
  not?: SearchableProductFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableProductSortInput = {
  field?: SearchableProductSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableProductSortableFields {
  id = "id",
  name = "name",
  supplierName = "supplierName",
  description = "description",
  imageUrl = "imageUrl"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

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
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
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
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
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
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type CreateVoitureMutation = {
  __typename: "Voiture";
  id: string;
  teamId: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type UpdateVoitureMutation = {
  __typename: "Voiture";
  id: string;
  teamId: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type DeleteVoitureMutation = {
  __typename: "Voiture";
  id: string;
  teamId: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
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
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
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
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncVoituresQuery = {
  __typename: "ModelVoitureConnection";
  items: Array<{
    __typename: "Voiture";
    id: string;
    teamId: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetVoitureQuery = {
  __typename: "Voiture";
  id: string;
  teamId: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type ListVoituresQuery = {
  __typename: "ModelVoitureConnection";
  items: Array<{
    __typename: "Voiture";
    id: string;
    teamId: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SearchProductsQuery = {
  __typename: "SearchableProductConnection";
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
  } | null> | null;
  nextToken: string | null;
  total: number | null;
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
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
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
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
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
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateVoitureSubscription = {
  __typename: "Voiture";
  id: string;
  teamId: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateVoitureSubscription = {
  __typename: "Voiture";
  id: string;
  teamId: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteVoitureSubscription = {
  __typename: "Voiture";
  id: string;
  teamId: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
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
          }
          _version
          _deleted
          _lastChangedAt
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
          }
          _version
          _deleted
          _lastChangedAt
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
          }
          _version
          _deleted
          _lastChangedAt
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
  async CreateVoiture(
    input: CreateVoitureInput,
    condition?: ModelVoitureConditionInput
  ): Promise<CreateVoitureMutation> {
    const statement = `mutation CreateVoiture($input: CreateVoitureInput!, $condition: ModelVoitureConditionInput) {
        createVoiture(input: $input, condition: $condition) {
          __typename
          id
          teamId
          _version
          _deleted
          _lastChangedAt
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
    return <CreateVoitureMutation>response.data.createVoiture;
  }
  async UpdateVoiture(
    input: UpdateVoitureInput,
    condition?: ModelVoitureConditionInput
  ): Promise<UpdateVoitureMutation> {
    const statement = `mutation UpdateVoiture($input: UpdateVoitureInput!, $condition: ModelVoitureConditionInput) {
        updateVoiture(input: $input, condition: $condition) {
          __typename
          id
          teamId
          _version
          _deleted
          _lastChangedAt
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
    return <UpdateVoitureMutation>response.data.updateVoiture;
  }
  async DeleteVoiture(
    input: DeleteVoitureInput,
    condition?: ModelVoitureConditionInput
  ): Promise<DeleteVoitureMutation> {
    const statement = `mutation DeleteVoiture($input: DeleteVoitureInput!, $condition: ModelVoitureConditionInput) {
        deleteVoiture(input: $input, condition: $condition) {
          __typename
          id
          teamId
          _version
          _deleted
          _lastChangedAt
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
    return <DeleteVoitureMutation>response.data.deleteVoiture;
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
          }
          _version
          _deleted
          _lastChangedAt
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
  async SyncVoitures(
    filter?: ModelVoitureFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncVoituresQuery> {
    const statement = `query SyncVoitures($filter: ModelVoitureFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncVoitures(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            teamId
            _version
            _deleted
            _lastChangedAt
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
    return <SyncVoituresQuery>response.data.syncVoitures;
  }
  async GetVoiture(teamId: string, id: string): Promise<GetVoitureQuery> {
    const statement = `query GetVoiture($teamId: ID!, $id: ID!) {
        getVoiture(teamId: $teamId, id: $id) {
          __typename
          id
          teamId
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      teamId,
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVoitureQuery>response.data.getVoiture;
  }
  async ListVoitures(
    teamId?: string,
    id?: ModelIDKeyConditionInput,
    filter?: ModelVoitureFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListVoituresQuery> {
    const statement = `query ListVoitures($teamId: ID, $id: ModelIDKeyConditionInput, $filter: ModelVoitureFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listVoitures(teamId: $teamId, id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            teamId
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (teamId) {
      gqlAPIServiceArguments.teamId = teamId;
    }
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVoituresQuery>response.data.listVoitures;
  }
  async SearchProducts(
    filter?: SearchableProductFilterInput,
    sort?: SearchableProductSortInput,
    limit?: number,
    nextToken?: string
  ): Promise<SearchProductsQuery> {
    const statement = `query SearchProducts($filter: SearchableProductFilterInput, $sort: SearchableProductSortInput, $limit: Int, $nextToken: String) {
        searchProducts(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken) {
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
          }
          nextToken
          total
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
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
    return <SearchProductsQuery>response.data.searchProducts;
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
          }
          _version
          _deleted
          _lastChangedAt
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
          }
          _version
          _deleted
          _lastChangedAt
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
          }
          _version
          _deleted
          _lastChangedAt
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
        }
      }`
    )
  ) as Observable<OnDeleteCategorySubscription>;

  OnCreateVoitureListener: Observable<
    OnCreateVoitureSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVoiture {
        onCreateVoiture {
          __typename
          id
          teamId
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<OnCreateVoitureSubscription>;

  OnUpdateVoitureListener: Observable<
    OnUpdateVoitureSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVoiture {
        onUpdateVoiture {
          __typename
          id
          teamId
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<OnUpdateVoitureSubscription>;

  OnDeleteVoitureListener: Observable<
    OnDeleteVoitureSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVoiture {
        onDeleteVoiture {
          __typename
          id
          teamId
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<OnDeleteVoitureSubscription>;
}
