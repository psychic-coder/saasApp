import { query } from "./_generated/server";

//we.re fetchin the data using the query
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});