# Prisma Cleaner

Prisma Cleaner is a utility for cleaning database with [Prisma](https://github.com/prisma/prisma) in testing. You can use in [Jest]([facebook/jest: Delightful JavaScript Testing.](https://github.com/facebook/jest)) or [Mocha]([mochajs/mocha: ☕️ simple, flexible, fun javascript test framework for node.js & the browser](https://github.com/mochajs/mocha)), etc.

## Setup

```
npm i -D prisma-cleaner
```

## Usage

```javascript
import { PrismaCleaner } from 'prisma-cleaner'

const cleaner = new PrismaCleaner()

beforeEach(async () => {
  await cleaner.clean()
})
```
