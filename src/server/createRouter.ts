import { initTRPC } from "@trpc/server";
import { transformer } from "@/utils/transformer";
import { Context } from "./context";

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.

// const t = initTRPC.create();
const t = initTRPC.context<Context>().create({
  /**
   * @see https://trpc.io/docs/v10/data-transformers
   */
  transformer,
  /**
   * @see https://trpc.io/docs/v10/error-formatting
   */
  errorFormatter({ shape }) {
    return shape;
  },
});

// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;
