import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const posts = await prisma.post.findMany({
  where: {
    AND: [
      { title: { contains: "Prisma" } },
      { published: true },
    ],
    /** Shorthand version of this would be 👇🏾 */
    // title: {
    //   contains: "Prisma"
    // },
    // published: true
  }
})

console.log(posts)