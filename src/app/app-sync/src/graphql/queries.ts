import gql from 'graphql-tag';

// tslint:disable
// this is an auto generated file. This will be overwritten

export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    name
    supplierName
    description
  }
}
`;
export const listProducts = gql([`query ListProducts(
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
    }
    nextToken
  }
}
`]);

export const SyncProducts = gql`query SyncProducts(
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
      version
    }
    nextToken
    startedAt
  }
}`