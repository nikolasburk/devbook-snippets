import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const prismaMigratePosts = await prisma.post.findMany({
  where: {
    title: {
      contains: "Migrate"
    }
  }
})

console.log(prismaMigratePosts)