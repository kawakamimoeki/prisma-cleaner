import { PrismaClient } from '@prisma/client'

export class PrismaCleaner {
  constructor(prisma = new PrismaClient()) {
    this.prisma = prisma
    const propertyNames = Object.getOwnPropertyNames(prisma)
    this.modelNames = propertyNames.filter((name) => this.isModelName(name))
  }

  async clean() {
    console.log(`Database cleaning...`)
    return Promise.all(
      this.modelNames.map((modelName) => this.prisma[modelName].deleteMany())
    )
  }

  /**
   * @param {String} name
   * @returns {Boolean}
   */
  isModelName(name) {
    return !name.match(/^(_|\$)/)
  }
}
