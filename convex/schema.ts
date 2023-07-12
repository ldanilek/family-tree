import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { person } from "./person";

export default defineSchema({
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
  people: defineTable(person),
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
});
