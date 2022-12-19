import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// Relation: One-level deep
const userWithPosts = await prisma.user.findMany({
  include: {
    posts: true,
    /**
     * Feel free to uncomment the line below to include the `profile` relation
     */
    // profile: true
  }
})


/**
 * Relation: Two-levels deep
 * Comment out the first query and uncomment the one below to re-run and see the output 👇🏾
 */

// const userWithPosts = await prisma.user.findMany({
//   include: {
//     posts: {
//       include: {
//         categories: true,
//       }
//     }
//   }
// })

console.dir(userWithPosts, { depth: Infinity })