import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

function hash(password) {
  return 'hashed'
}

prisma.$use(async (params, next) => {
  if (params.model === 'User') {
    if (params.action === 'create' || params.action === 'update') {
      if (params.args.data.password) {
        const hashPass = hash(params.args.data.password)
        params.args.data.password = hashPass
      }
    }
  }
  return next(params)
})
