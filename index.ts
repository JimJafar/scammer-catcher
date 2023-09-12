import { buchta } from "buchta-elysia-integration";
import Elysia from "elysia";
import fs from "fs/promises";
import logs from "./logs.json" assert { type: "json" };

const app = new Elysia();

app.get("/api/log/:ip", async ({ params: { ip } }) => {
  console.log(
    `https://api.ipapi.com/api/${ip}?access_key=${Bun.env.IPAPI_KEY}`
  );
  const response = await fetch(
    `http://api.ipapi.com/api/${ip}?access_key=${Bun.env.IPAPI_KEY}`
  );
  const userInfo = await response.json();
  (logs as any[]).push({ time: Date.now(), ip, userInfo });
  fs.writeFile("./logs.json", JSON.stringify(logs, undefined, 2));
});

app.get("/api/logs", () => {
  return JSON.stringify(logs, undefined, 2);
});

app.post("/api/address", ({ body }) => {
  (logs as any[]).push({
    time: Date.now(),
    ip: (body as any).ip,
    address: (body as any).address,
  });
  fs.writeFile("./logs.json", JSON.stringify(logs, undefined, 2));
});

app.use(buchta);

// Why no .listen()?
// Buchta manages that for you :D
