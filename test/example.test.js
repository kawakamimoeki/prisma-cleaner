import * as assert from 'assert'
import { PrismaCleaner } from '../index.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const cleaner = new PrismaCleaner()

describe('prisma-cleaner', () => {
  beforeEach(async () => {
    await cleaner.clean()
    console.log(await prisma.user.findMany())
  })

  afterEach(async () => {
    await cleaner.clean()
  })

  describe('first creation', () => {
    it('creates a user', async () => {
      const user = await prisma.user.create({
        data: {
          name: 'John Lenon',
          email: 'john@example.com'
        }
      })
      assert.equal(user.name, 'John Lenon')
    })
  })

  describe('second creation', () => {
    it('creates a user', async () => {
      const user = await prisma.user.create({
        data: {
          name: 'John Wick',
          email: 'john@example.com'
        }
      })
      assert.equal(user.name, 'John Wick')
    })
  })
})
