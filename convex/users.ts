import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

export const createUser=internalMutation({
    //so basically args contains the data we want to inset into the database
    // and hadler function is used to insert the data
    args: {
        clerkId: v.string(),
        email: v.string(),
        imageUrl: v.string(),
        name: v.string(),
      },
      handler: async (ctx, args) => {
        await ctx.db.insert("users", {
          clerkId: args.clerkId,
          email: args.email,
          imageUrl: args.imageUrl,
          name: args.name,
        });
      },
    });