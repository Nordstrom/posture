import { buildMessage } from './messages'

it('buildMessage iterpolates variables', () => {
  let severity = 'extreme'
  let standardResponse = {
    pathKey: 'warning-name_root_VAR1_VAR2',
    params: { '$VAR1': 'foo', '$VAR2': 'bar' }
  }
  let missingResponse = {
    pathKey: 'missing_root_VAR1_VAR2_description',
    params: { '$VAR1': 'foo', '$VAR2': 'bar' }
  }
  let nullResponse = {
    pathKey: 'missing_root_VAR1_VAR2_description_false',
    params: { '$VAR1': 'foo', '$VAR2': 'bar' }
  }
  let lineMap = {
    'root_foo_bar': 3
  }
  let messageObject = {
    'extreme': {
      'warning-name_root_VAR1_VAR2': (line) => { return `${line} $VAR1 $VAR2` },
      'missing_root_VAR1_VAR2_description': (line) => { return `${line} $VAR1 $VAR2 missing` }
    }
  }

  expect(buildMessage(severity, standardResponse, lineMap, messageObject)).toBe('3 FOO BAR')
  expect(buildMessage(severity, missingResponse, lineMap, messageObject)).toBe('3 FOO BAR missing')
  expect(buildMessage(severity, nullResponse, lineMap, messageObject)).toBe(null)
})
