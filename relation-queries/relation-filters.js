import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const publishedAuthors = await prisma.user.findMany({
  include: {
    posts: {
      where: {
        published: true,
        /**
         * Feel free to uncomment the lines below to add more filters to your query
         */
        // title: {
        //   contains: 'Prisma'
        // }
      }
    }
  }
})


console.dir(publishedAuthors, { depth: Infinity })