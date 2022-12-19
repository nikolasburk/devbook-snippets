import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Return all published posts in ascending order
 */
const posts = await prisma.post.findMany({
  where: {
    published: true,
  },
  orderBy: {
    createdAt: 'asc'
  }
})

console.log(posts)