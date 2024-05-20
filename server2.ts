import { Application, Context } from "https://deno.land/x/abc@v1.3.3/mod.ts";

const app = new Application();

try {
  app
    .get("/hello", (ctx: Context) => {
      ctx.response.body = "FUCKING SHIT";
      ctx.response.status = 200;
      ctx.response.statusText = "Eat shit";
      ctx.response.headers.set("application-content", "text;utf-8");
      return;
    })
    .post("/fuck", async (ctx: Context) => {
      const body = await ctx.body;
      console.log(await ctx.body);
      console.log(await ctx.request.headers);
      console.log((await ctx.request.headers).get("content-type"));

      ctx.response.status = 200;
      ctx.response.statusText = "It's OK, fuck";
      ctx.response.headers.set("content-type", "application/json");
      ctx.response.body = JSON.stringify({ fuck: "YOU" });
    })
    .start({ port: 8000 });
  console.log("Server --> running");
} catch (e) {
  console.log(e);
}
