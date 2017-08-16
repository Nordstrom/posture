import exampleSwagger from './testUtils/exampleSwagger'
import lintSwagger from './lint'

it('returns array of message objects by severity', () => {
  const requirementsArray = [{
    severity: 'warnings',
    requirements: {
      'length-25-75': {
        get: [ 'summary' ],
        put: [ 'summary' ],
        post: [ 'summary' ],
        delete: [ 'summary' ],
        options: [ 'summary' ],
        head: [ 'summary' ],
        patch: [ 'summary' ]
      },
      missing: {
        root: ['tags'],
        get: [ 'field' ],
        put: [ 'field' ],
        post: [ 'field' ],
        delete: [ 'field' ],
        options: [ 'field' ],
        head: [ 'field' ],
        patch: [ 'field' ],
        email: [ 'default' ],
        usernickname: [ 'default' ]
      }
    }
  }]

  const expectedResults = {
    warnings: [
      { pathkey: 'missing_root_definitions_DEFKEY_properties_PROPKEY_default',
        params: { '$DEFKEY': '', '$PROPKEY': '' } },
      { pathKey: 'length-25-75_root_paths_PATH_OPERATION_summary',
        params: { '$PATH': '/blog', '$OPERATION': 'get' } },
      { pathKey: 'missing_root_paths_PATH_OPERATION_field',
        params: { '$PATH': '/blog', '$OPERATION': 'get' } },
      { pathKey: 'missing_root_paths_PATH_OPERATION_field',
        params: { '$PATH': '/blog', '$OPERATION': 'post' } },
      { pathKey: 'missing_root_paths_PATH_OPERATION_field',
        params: { '$PATH': '/profile', '$OPERATION': 'get' } }
    ]
  }
  const results = lintSwagger(exampleSwagger, requirementsArray)

  expect(results.warnings).toEqual(expectedResults.warnings)
})
