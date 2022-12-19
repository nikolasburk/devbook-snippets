import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const publishedPosts = await prisma.post.aggregate({
  _count: {
    published: true,
  },
  where: {
    published: true,
  }
})

console.log(publishedPosts)