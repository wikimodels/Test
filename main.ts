import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import { findAll, findOne, create } from "./handler.ts";

const app = new Application();

app
  .get("/", findAll)
  .get("/:id", findOne)
  .post("/create", create)
  .start({ port: 8080 });

console.log(`server listening on http://localhost:8080`);
