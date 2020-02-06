// tslint:disable

export const CreateProduct = `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
}`

export const UpdateProduct = `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
}`


export const DeleteProduct = `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
}`


export const CreateCategory = `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
    id
    name
    _version
    _deleted
    _lastChangedAt
    
  }
}`


export const UpdateCategory = `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
    id
    name
    _version
    _deleted
    _lastChangedAt
    
  }
}`


export const DeleteCategory = `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
    id
    name
    _version
    _deleted
    _lastChangedAt
    
  }
}`
