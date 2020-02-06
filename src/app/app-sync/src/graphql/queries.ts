// tslint:disable

export const SyncProducts = `query SyncProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProducts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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


export const GetProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    name
    supplierName
    description
    imageUrl
    category {
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

export const ListProducts = `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
}`

export const SyncCategories = `query SyncCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      _version
      _deleted
      _lastChangedAt
      
    }
    nextToken
    startedAt
  }
}`

export const GetCategory = `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    name
    _version
    _deleted
    _lastChangedAt
    
  }
}`

export const ListCategorys = `query ListCategorys(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      _version
      _deleted
      _lastChangedAt
      
    }
    nextToken
    startedAt
  }
}`
