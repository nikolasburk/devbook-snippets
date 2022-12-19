import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that we can use async/await
async function main() {
  await prisma.user.create({
    data: {
      name: "Sonia Lomo",
      age: 25,
      email: "lomo@prisma.io",
      country: "Kenya",
      profile: {
        create: {
          bio: "I like turtles",
        },
      },
      posts: {
        create: [
          {
            title: "Hello World",
            categories: {
              create: {
                name: "Random",
              },
            },
          },
          {
            title: "How Prisma Makes Frontend Developers Fullstack",
            published: true,
            categories: {
              create: {
                name: "Tech",
              },
            },
          },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      name: "Alex Ruheni",
      age: 25,
      email: "ruheni@prisma.io",
      country: "Germany",
      profile: {
        create: {
          bio: "MDX Ninja @ Prisma",
        },
      },
      posts: {
        create: [
          {
            title:
              "What it feels like to work in a company with 5 people called Alex",
            published: true,
            categories: {
              connect: {
                id: 1,
              },
            },
          },
          {
            title: "Deep Dive into Prisma Migrate 1/5",
            published: true,
            categories: {
              connect: {
                id: 2,
              },
            },
          },
          {
            title: "Deep Dive into Prisma Migrate 2/5",
            published: true,
            categories: {
              connect: {
                id: 2,
              },
            },
          },
          {
            title: "Deep Dive into Prisma Migrate 3/5",
            published: true,
            categories: {
              connect: {
                id: 2,
              },
            },
          },
          {
            title: "Deep Dive into Prisma Migrate 4/5",
            categories: {
              connect: {
                id: 2,
              },
            },
          },
          {
            title: "Deep Dive into Prisma Migrate 5/5",
            categories: {
              connect: {
                id: 2,
              },
            },
          },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      age: 20,
      name: "Nilu Bava",
      email: "bava@prisma.io",
      role: "ADMIN",
      country: "Germany"
    }
  })

  await prisma.user.create({
    data: {
      name: "Ada Lovelace",
      age: 208,
      email: "ada@lovelace.dev",
      country: "England",
      profile: {
        create: {
          bio: "I wrote computer programs before it was cool"
        }
      },
      posts: {
        create: [{
          title: "How Computers Work",
          published: true,
          categories: {
            connect: {
              id: 2
            }
          }
        }, {
          title: "A typical day of an Engineer in England in the 1820s",
          categories: {
            connect: {
              id: 2
            }
          }
        }]
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
