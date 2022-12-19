import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

/** If the user doesn't exist, Prisma Client will throw an error */
const user = await prisma.user.findFirstOrThrow({
  where: {
    id: 1,
    /**
     * Feel free to uncomment the line below to add more filters to your query 
    */
    // email: "nilu@prisma.io",
    // age: {
    //   gt: 5
    // }
  }
})

console.log(user)