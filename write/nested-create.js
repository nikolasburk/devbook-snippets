import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create a user with a bio and a post (and put the post into a new category)
const user = await prisma.user.create({
  data: {
    name: "Nikolas Burk",
    age: 42,
    email: "burk@prisma.io",
    country: "Germany",
    profile: {
      create: {
        bio: "Pasionate teacher and learner",
      },
    },
    posts: {
      create: [
        {
          title: "How Germany will win the football world cup in 2026",
          categories: {
            create: {
              name: "Sports",
            },
          },
        },
      ],
    },
  },
});

console.dir(user, { depth: null });
