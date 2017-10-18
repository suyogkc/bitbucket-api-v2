import {
  test,
  Addon
} from './imports'
import {
  prepareTest
} from './prepare'

const {
  $get,
  $post,
  user,
  repo
} = prepareTest(test, addon, ['get'])

test('Addon: create', t => {
  t.truthy(Addon)
})

// more tests ...