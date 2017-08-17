import { getRequirements } from './requirements'
import exampleSwagger from './testUtils/exampleSwagger'

const warnings = {
  'basic-error_root_tags': null,
  'path-error_root_paths_PATH_OPERATION_field': null,
  'definiton-error_root_definitions_DEFKEY_properties_PROPKEY_field': null
}

it('builds requirements from common Operations', () => {
  var reqs = getRequirements({ warnings }, exampleSwagger)
  var expected = {
    get: [ 'field' ],
    put: [ 'field' ],
    post: [ 'field' ],
    delete: [ 'field' ],
    options: [ 'field' ],
    head: [ 'field' ],
    patch: [ 'field' ]
  }

  expect(reqs.severities[0].requirements['path-error']).toEqual(expected)
})

it('builds requirements from Definiton Keys and Property Keys', () => {
  var reqs = getRequirements({ warnings }, exampleSwagger)
  var expected = {
    'blog': [
      'field'
    ],
    'blogs': [
      'field'
    ],
    'blogsummary': [
      'field'
    ],
    'email': [
      'field'
    ],
    'errorcode': [
      'field'
    ],
    'message': [
      'field'
    ],
    'page': [
      'field'
    ],
    'pagesize': [
      'field'
    ],
    'title': [
      'field'
    ],
    'totalcount': [
      'field'
    ],
    'userid': [
      'field'
    ],
    'usernickname': [
      'field'
    ]
  }

  expect(reqs.severities[0].requirements['definiton-error']).toEqual(expected)
})
