import { HandlerFunc, Context } from "https://deno.land/x/abc@v1.3.3/mod.ts";

import { CatDTO } from "./cats.ts";

import { Cat } from "./cats.ts";

const cats: Cat[] = [];

export const findAll: HandlerFunc = () => cats;
export const findOne: HandlerFunc = (c) => {
  const { id } = c.params as { id: string };
  return cats.find((cat) => cat.id.toString() === id);
};
export const create: HandlerFunc = async (ctx: Context) => {
  const { name, age } = (await ctx.body) as CatDTO;
  const cat = new Cat({ name, age });
  cats.push(cat);
  return cat;
};
