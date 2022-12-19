import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

await prisma.$transaction(async (tx) => {

  // 1. Create a new user ...
  const user = await prisma.user.create({
    data: { 
      email: "burk@prisma.io",
      age: 42,
      country: "Germany",
      name: "Nikolas Burk",
    },
  });

  // 2. ... then load the number of users in the database ...
  const count = await prisma.user.count()

  // 3. ... and use the `count` as information in a new query
  await prisma.post.create({
    data: {
      title: `I am user #${count} in the database.`,
      authorId: user.id
    }
  })

})

// Validate that the transaction was executed successfully
const user = await prisma.user.findUnique({
  where: { email: "burk@prisma.io" },
  include: {
    posts: true
  }
})
console.dir(user, { depth: null})