import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const page = await prisma.post.findMany({
  where: {
    published: true,
  },
  skip: 0,
  take: 2,
})

console.log(page)