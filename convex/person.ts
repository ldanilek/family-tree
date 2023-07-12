import { v } from "convex/values";
import { mutation } from "./_generated/server";


export const person = {
  name: v.string(),
};

export const newPerson = mutation({
  args: { person: v.object(person) },
  handler: async ({ db }, { person }) => {
    await db.insert("people", person);
  },
});
