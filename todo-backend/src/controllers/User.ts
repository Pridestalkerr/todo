import argon2 from "argon2";
import { PrismaClient, Prisma } from "@prisma/client";

import { User } from "@prisma/client";
const prismaClient = new PrismaClient();

const find = async (id: string) => {
  await prismaClient.user.findUnique({
    where: {
      id,
    },
  });
};

const create = async (email: string, password: string) => {
  const user: User = await prismaClient.user.create({
    data: {
      g,
    },
  });
};

const update = async (
  id: Number,
  { old_password, password }: { old_password: string; password: string }
) => {
  const user: User = await prismaClient.user.update({
    where: {
      id,
      password: await argon2.hash(old_password),
    },
    data: {
      password: await argon2.hash(password),
    },
  });
  // check for failure
};

const remove = async (id: Number) => {
  await prismaClient.user.delete({
    where: {
      id,
    },
  });
};

export { find, create, update, remove };
