import { z } from "zod";

import { router, procedure } from "../createRouter";
import { prisma } from "../utils/prisma";

export const donorRouter = router({
  list: procedure.query(async ({ input }) => {
    const donors = await prisma.donor.findMany();

    return {
      items: donors,
    };
  }),

  add: procedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        street: z.string(),
        postalCode: z.string(),
        city: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const donor = await prisma.donor.create({
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          street: input.street,
          postalCode: input.postalCode,
          city: input.city,
        },
      });
      return donor;
    }),
});
