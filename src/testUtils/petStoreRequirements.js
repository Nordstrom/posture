export default {
  'severities': [
    {
      'severity': 'errors',
      'requirements': {
        'missing': {
          'root': [
            'swagger',
            'info',
            'schemes',
            'produces',
            'consumes',
            'paths'
          ],
          'info': [
            'title',
            'version'
          ],
          'get': [
            'responses'
          ],
          'put': [
            'responses'
          ],
          'post': [
            'responses'
          ],
          'delete': [
            'responses'
          ],
          'options': [
            'responses'
          ],
          'head': [
            'responses'
          ],
          'patch': [
            'responses'
          ]
        }
      }
    },
    {
      'severity': 'warnings',
      'requirements': {
        'length-10-75': {
          'get': [
            'summary'
          ],
          'put': [
            'summary'
          ],
          'post': [
            'summary'
          ],
          'delete': [
            'summary'
          ],
          'options': [
            'summary'
          ],
          'head': [
            'summary'
          ],
          'patch': [
            'summary'
          ]
        },
        'length-25-10000': {
          'get': [
            'description'
          ],
          'put': [
            'description'
          ],
          'post': [
            'description'
          ],
          'delete': [
            'description'
          ],
          'options': [
            'description'
          ],
          'head': [
            'description'
          ],
          'patch': [
            'description'
          ]
        },
        'missing': {
          'info': [
            'description'
          ],
          'get': [
            'summary',
            'description'
          ],
          'put': [
            'summary',
            'description'
          ],
          'post': [
            'summary',
            'description'
          ],
          'delete': [
            'summary',
            'description'
          ],
          'options': [
            'summary',
            'description'
          ],
          'head': [
            'summary',
            'description'
          ],
          'patch': [
            'summary',
            'description'
          ]
        }
      }
    },
    {
      'severity': 'optimizations',
      'requirements': {
        'missing': {
          'root': [
            'tags'
          ],
          'parameters': [
            'default'
          ],
          'id': [
            'default'
          ],
          'petId': [
            'default'
          ],
          'quantity': [
            'default'
          ],
          'shipDate': [
            'default'
          ],
          'status': [
            'default'
          ],
          'complete': [
            'default'
          ],
          'name': [
            'default'
          ],
          'username': [
            'default'
          ],
          'firstName': [
            'default'
          ],
          'lastName': [
            'default'
          ],
          'email': [
            'default'
          ],
          'password': [
            'default'
          ],
          'phone': [
            'default'
          ],
          'userStatus': [
            'default'
          ],
          'code': [
            'default'
          ],
          'type': [
            'default'
          ],
          'message': [
            'default'
          ],
          'category': [
            'default'
          ],
          'photoUrls': [
            'default'
          ],
          'tags': [
            'default'
          ]
        }
      }
    }
  ],
  'keyVars': {
    'propKeys': [
      'id',
      'petId',
      'quantity',
      'shipDate',
      'status',
      'complete',
      'id',
      'name',
      'id',
      'username',
      'firstName',
      'lastName',
      'email',
      'password',
      'phone',
      'userStatus',
      'id',
      'name',
      'code',
      'type',
      'message',
      'id',
      'category',
      'name',
      'photoUrls',
      'tags',
      'status'
    ],
    'defKeys': [
      'Order',
      'Category',
      'User',
      'Tag',
      'ApiResponse',
      'Pet'
    ],
    'operations': [
      'get',
      'put',
      'post',
      'delete',
      'options',
      'head',
      'patch'
    ]
  }
}
