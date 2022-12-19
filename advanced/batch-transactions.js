import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * 1. We first create three unresolved queries ...
 */

const createUser =   prisma.user.create({
  data: {
    name: 'Bob',
    email: 'bob@prisma.io',
    age: 49,
    country: 'USA',
  },
})

const updateUser = prisma.user.update({
  where: {
    email: 'lomo@prisma.io',
  },
  data: {
    country: 'Germany',
  },
})

const deleteUser =   prisma.user.delete({
  where: {
    email: 'bava@prisma.io',
  },
})

/**
 * 2. ... and then submit all three at once to be executed in a single database transaction.
 */

const [bob, carol, nilu] = await prisma.$transaction([
  createUser,
  updateUser,
  deleteUser
])

console.log(`Created, updated and deleted 3 user records in a single transaction.`, bob, carol, nilu)