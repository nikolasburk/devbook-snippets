import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// Hover on the `user` variable to tell the type of the returned data
const user = await prisma.user.findMany({
  select: {
    name: true,
    age: true,
    email: true,
    /**
     * Uncomment the lines below to select more fields from the table
     */
    // role: true,
    // createdAt: true
    // updatedAt: true
  }
})

console.log({ user })