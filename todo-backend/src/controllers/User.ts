import { prisma } from "@prisma/client";
import argon2 from "argon2";

export default {
  find: async (id: Number) => {
    await prisma.user.findUnique({
      id,
    });
  },

  create: async (email: string, password: string) => {
    const user: User = await prisma.user.create({
      data: {
        email,
        password: await argon2.hash(password),
      },
    });
  },

  update: async (
    id: Number,
    { old_password, password }: { old_password: string; password: string }
  ) => {
    const user: User = await prisma.user.update({
      where: {
        id,
        password: await argon2.hash(old_password),
      },
      data: {
        password: await argon2.hash(password),
      },
    });
    // check for failure
  },

  delete: async (id: Number) => {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  },
};
