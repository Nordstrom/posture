import exampleSwagger from './testUtils/petStoreSwagger'
import requirements from './testUtils/petStoreRequirements'
import lintSwagger from './lint'

it('returns array of message objects by severity', () => {
  const expectedResults = {
    'errors': [
      {
        'pathKey': 'missing_root_consumes',
        'params': {}
      }
    ],
    'optimizations': [
      {
        'pathKey': 'missing_root_tags_default',
        'params': {}
      },
      {
        'pathKey': 'missing_root_tags_default',
        'params': {}
      },
      {
        'pathKey': 'missing_root_tags_default',
        'params': {}
      },
      {
        'pathKey': 'missing_root_paths_PATH_OPERATION_parameters_default',
        'params': {
          '$PATH': '/pet/findByStatus',
          '$OPERATION': 'get',
          '$SCHEMA': 'status'
        }
      },
      {
        'pathKey': 'missing_root_definitions_DEFKEY_properties_PROPKEY_default',
        'params': {
          '$DEFKEY': 'Order',
          '$PROPKEY': 'id'
        }
      }
    ],
    'warnings': [
      {
        'pathKey': 'length-10-75_root_paths_PATH_OPERATION_summary',
        'params': {
          '$PATH': '/pet',
          '$OPERATION': 'post'
        }
      },
      {
        'pathKey': 'length-25-10000_root_paths_PATH_OPERATION_description',
        'params': {
          '$PATH': '/pet',
          '$OPERATION': 'post'
        }
      }
    ]
  }
  const results = lintSwagger(exampleSwagger, requirements)
  expect(results).toEqual(expectedResults)
})
