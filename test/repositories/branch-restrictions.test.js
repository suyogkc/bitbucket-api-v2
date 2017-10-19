import {
  test,
  BranchRestrictions
} from './imports'

import {
  $api,
  prepareTest
} from '../prepare'

let methods = [
  'get',
  'create',
  'getRestriction',
  'updateRestriction',
  'removeRestriction'
]

const api = $api.branchRestrictions.promised
let {
  $stubs,
  user,
  repo
} = prepareTest(test, api, methods)

const expected = require('./mocks/branchRestrictions.json')

// TODO: generate all tests using data instead!!!

test('branchRestrictions: get(username, repoSlug, callback)', async t => {
  prepareStub($stubs, expected)
  let result = await api.get(user, repo)
  t.truthy(result)
})

test('branchRestrictions: create(username, repoSlug, kind, callback)', async t => {
  prepareStub($stubs, expected)
  // Allowed values for kind are: push, force, delete, and restrict_merges.
  let kind = 'push'
  let result = await api.create(user, repo, kind)
  t.truthy(result)
})

const restrictionId = '123'

test('branchRestrictions: getRestriction(username, repoSlug, restrictionId, callback)', async t => {
  prepareStub($stubs, expected)
  let result = await api.getRestriction(user, repo, restrictionId)
  t.truthy(result)
})

test('branchRestrictions: updateRestriction(username, repoSlug, restrictionId, restriction, callback)', async t => {
  prepareStub($stubs, expected)
  let result = await api.updateRestriction(user, repo, restrictionId)
  t.truthy(result)
})

test('branchRestrictions: removeRestriction(username, repoSlug, restrictionId, restriction, callback)', async t => {
  prepareStub($stubs, expected)
  let result = await api.removeRestriction(user, repo, restrictionId)
  t.truthy(result)
})
