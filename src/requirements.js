import _ from 'lodash'

export const operations = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch']

/**
  maps the requirements in the messageObject for easy look ups durring the traversal of the swagger object
**/
const buildObjectNavigationMap = (messageObject, swagger, keyVars) => {
  const map = {}

  _.keys(messageObject).forEach((path) => {
    const errorPath = _.take(path.split('_'), 1)
    const tailPath = _.takeRight(path.split('_'), 2)
    map[errorPath] = map[errorPath] || {}
    map[errorPath][tailPath[0]] = map[errorPath][tailPath[0]] || []
    map[errorPath][tailPath[0]].push(tailPath[1])
  })

  /**
    maps the generic root>paths>PATH>OPERATION
    to the standard http operations of the target swagger file
  **/
  for (var errorPath in map) {
    if (map[errorPath]['OPERATION']) {
      operations.forEach((key) => {
        map[errorPath][key] = map[errorPath]['OPERATION']
      })
      _.unset(map[errorPath], 'OPERATION')
    }

    /**
      maps the generic root>definitions>DEFKEY>properties>PROPKEY
      to specific properties of the target swagger file
    **/
    if (map[errorPath]['PROPKEY']) {
      _.keys(swagger.definitions).forEach((defKey) => {
        keyVars.defKeys.push(defKey)
        _.keys(swagger.definitions[defKey].properties).forEach((key) => {
          keyVars.propKeys.push(key)
          map[errorPath][key] = map[errorPath]['PROPKEY']
        })
      })
      _.unset(map[errorPath], 'PROPKEY')
    }
  }
  return map
}

export const getRequirements = (messages, swagger) => {
  var requirementsBySeverity = []
  var keyVars = {
    propKeys: [],
    defKeys: [],
    operations
  }

  _.keys(messages).forEach((severity) => {
    var requirementsObject = {
      severity,
      requirements: buildObjectNavigationMap(messages[severity], swagger, keyVars)
    }
    requirementsBySeverity = _.concat(requirementsBySeverity, [requirementsObject])
  })
  return { severities: requirementsBySeverity, keyVars }
}
