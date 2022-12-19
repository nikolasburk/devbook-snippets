import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const posts = await prisma.$queryRaw`
  SELECT * FROM "Post" order by random() limit 5
`

console.log(posts)