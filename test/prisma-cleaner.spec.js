import * as assert from 'assert'
import { PrismaCleaner } from '../index.js'

describe('prisma-cleaner', () => {
  describe('#isModelName', () => {
    describe('_test', () => {
      it('returns false', async () => {
        const cleaner = new PrismaCleaner()
        assert.equal(cleaner.isModelName('_test'), false)
      })
    })

    describe('$test', () => {
      it('returns false', async () => {
        const cleaner = new PrismaCleaner()
        assert.equal(cleaner.isModelName('$test'), false)
      })
    })

    describe('user', () => {
      it('returns true', async () => {
        const cleaner = new PrismaCleaner()
        assert.equal(cleaner.isModelName('user'), true)
      })
    })
  })
})
