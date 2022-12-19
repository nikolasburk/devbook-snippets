import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

await prisma.$executeRaw`TRUNCATE TABLE "User" CASCADE`

const userCount = await prisma.user.count()
console.log(`There are ${userCount} users in the database.`)
