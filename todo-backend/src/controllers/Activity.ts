import { Activity, prisma } from "@prisma/client";

export default {
  find: async (id: Number) => {
    await prisma.activity.findUnique({
      id,
    });
  },

  create: async (email: string, password: string) => {
    const activity: Activity = await prisma.activity.create({
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
    const activity: Activity = await prisma.activity.update({
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
    await prisma.activity.delete({
      where: {
        id,
      },
    });
  },
};
