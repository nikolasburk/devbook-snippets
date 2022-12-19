import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

/** If the user doesn't exist, Prisma Client will throw and error */
const user = await prisma.user.findUniqueOrThrow({
  where: {
    id: 1,
    /** 
     * Feel free to uncomment the line below the comment to add more filters to your query 
    */
    // email: "nilu@prisma.io",
  }
})

console.log({ user })