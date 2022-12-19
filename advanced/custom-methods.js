/**
 * Prisma Client extensions are currently in Preview. Add the `clientExtensions` Preview feature to your `generator` block:
 *
 * ```
 * generator client {
 *   provider        = "prisma-client-js"
 *   previewFeatures = ["clientExtensions"]
 * }
 * ```
 *
 * Learn more: https://www.prisma.io/blog/client-extensions-preview-8t3w27xkrxxn
 *
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient().$extends({
  model: {
    user: {
      // Create a custom method on `user`
      async findManyByDomain(domain) {
        return prisma.user.findMany({
          where: { email: { endsWith: `@${domain}` } },
        });
      },
    },
  },
});

const users = await prisma.user.findManyByDomain("prisma.io");
console.log(users);
