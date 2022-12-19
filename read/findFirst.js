import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

/** If the user doesn't exist, Prisma Client will return null */
const user = await prisma.user.findFirst({
  where: {
    id: 1,
    /** 
     * Feel free to uncomment the line below the comment to add more filters to your query 
    */
    // email: "alice@prisma.io",
  }
})

console.log({ user })