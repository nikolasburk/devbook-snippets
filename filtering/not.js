import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const posts = await prisma.post.findMany({
  where: {
    NOT: [
      { title: { contains: "Prisma" } },
      { published: true },
    ],
  }
})

console.log(posts)