import _ from 'lodash'

const buildPathKey = (prefix, pathArray, currentKey, obj, keyVars) => {
  var composedPath = ''
  const params = {}
  const fullKeyPath = _.concat(pathArray, currentKey)
  fullKeyPath.forEach((key, index) => {
    composedPath = `${composedPath}${extractVariableKeyNamesToParams(key, index, params, fullKeyPath, obj, keyVars)}`
  })

  return params.falsePositive ? null : { pathKey: `${prefix}${composedPath}`, params }
}

const extractVariableKeyNamesToParams = (key, index, params, fullKeyPath, obj, keyVars) => {
  if (_.startsWith(key, '/')) {
    _.set(params, '$PATH', key)
    return '_PATH'
  }
  if (keyVars.operations.includes(key)) {
    _.set(params, '$OPERATION', key)
    return '_OPERATION'
  }
  if (keyVars.defKeys.includes(key) && fullKeyPath[index - 1] === 'definitions') {
    _.set(params, '$DEFKEY', key)
    return '_DEFKEY'
  }
  if (keyVars.propKeys.includes(key) && fullKeyPath[index - 1] === 'properties') {
    _.set(params, '$PROPKEY', key)
    return '_PROPKEY'
  }
  if (key === 'default') {
    if (obj.required === false || obj['x-example'] || obj['schema'] || obj['$ref']) { _.set(params, 'falsePositive', true) }
    if (fullKeyPath[index - 1] === 'parameters') {
      _.set(params, '$SCHEMA', obj.name)
    }
  }
  return `_${key}`
}

export default buildPathKey
