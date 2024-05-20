import express from "npm:express@4.18.2";
import bodyParser from "npm:body-parser";
import { Application, Context } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import { load } from "https://deno.land/std@0.223.0/dotenv/mod.ts";

const env = await load();

const app = express();

app.use(bodyParser.json());

app.get("/", async (req: any, res: any) => {
  try {
    res.send("Shit On You");
  } catch (e) {
    console.log(e);
  }
});

app.post("/fuck", async (req: any, res: any) => {
  console.log(req.body);
  res.send({ status: 200, statusText: "Fuck" });
});

app.listen(8000, async () => {
  console.log("Server ---> running...");
});

// main(TF.h1);
// main(TF.m5);
// listenQueues();
