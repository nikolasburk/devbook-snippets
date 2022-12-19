import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const page = await prisma.post.findMany({
  where: {
    published: true,
  },
  cursor: {
    id: 2
  },
  take: 3,
})

console.log(page)