import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Assign an existing user as the new author of an existing post
const post = await prisma.post.update({
  where: { id: 1 },
  data: {
    author: {
      connect: {
        email: "ada@lovelace.dev",
      },
    },
  },
  include: {
    author: true,
  },
});

console.dir(post, { depth: null });
