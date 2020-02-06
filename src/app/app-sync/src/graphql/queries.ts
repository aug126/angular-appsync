// tslint:disable
// this is an auto generated file. This will be overwritten

export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    name
    supplierName
    description
    _version
  }
}
`;
export const listProducts = `query ListProducts(
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
      _version
    }
    nextToken
  }
}
`;


export const updateProduct = `
  mutation UpdateProduct($input: UpdateProductInput!, $condition: ModelProductConditionInput) {
    updateProduct(input: $input, condition: $condition) {
      __typename
      id
      name
      supplierName
      description
      imageUrl
    }
  }
`;