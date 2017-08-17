import exampleSwagger from './testUtils/exampleSwagger'
import lintSwagger from './lint'

it('returns array of message objects by severity', () => {
  const requirements = {
    severities: [{
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
    }],
    keyVars: {
      propKeys: [ 'usernickname', 'email' ],
      defKeys: [ 'userprofile', 'blog', 'blogs' ],
      operations: ['get', 'put', 'post', 'delete', 'options', 'head', 'patch']
    }
  }

  const expectedResults = {
    warnings: [
      { pathKey: 'length-25-75_root_paths_PATH_OPERATION_summary',
        params: { '$PATH': '/blog', '$OPERATION': 'get' } },
      { pathKey: 'missing_root_paths_PATH_OPERATION_field',
        params: { '$PATH': '/blog', '$OPERATION': 'get' } },
      { pathKey: 'missing_root_paths_PATH_OPERATION_field',
        params: { '$PATH': '/blog', '$OPERATION': 'post' } },
      { pathKey: 'missing_root_paths_PATH_OPERATION_field',
        params: { '$PATH': '/profile', '$OPERATION': 'get' } },
      { pathKey: 'missing_root_definitions_DEFKEY_properties_PROPKEY_default',
        params: { '$DEFKEY': 'userprofile', '$PROPKEY': 'usernickname' } },
      { pathKey: 'missing_root_definitions_DEFKEY_properties_PROPKEY_default',
        params: { '$DEFKEY': 'userprofile', '$PROPKEY': 'email' } },
      { pathKey: 'missing_root_definitions_DEFKEY_properties_PROPKEY_default',
        params: { '$DEFKEY': 'blog', '$PROPKEY': 'usernickname' } },
      { pathKey: 'missing_root_definitions_DEFKEY_properties_PROPKEY_default',
        params: { '$DEFKEY': 'blogs', '$PROPKEY': 'usernickname' } }
    ]
  }
  const results = lintSwagger(exampleSwagger, requirements)

  expect(results.warnings).toEqual(expectedResults.warnings)
})
