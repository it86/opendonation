import { z } from "zod";
import { router, procedure } from "../createRouter";

import connectDB from "../utils/prisma";
import { donorRouter } from "./donor";

// Connect to Prisma
connectDB();

export const appRouter = router({
  getHello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `Hallo ${input.text} mit Hilfe von TRPC!`,
      };
    }),

  donor: donorRouter,
});

export type AppRouter = typeof appRouter;
