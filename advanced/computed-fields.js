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

const prisma = new PrismaClient()
  .$extends({
    result: {
      user: {
        // Add a computed field called `nameAndAge` to the user
        nameAndAge: {
          needs: { name: true, age: true },
          compute(user) {
            return `${user.name} (${user.age}y)`;
          },
        },
      },
    },
  })

const user = await prisma.user.findFirst()
console.log(user.nameAndAge)