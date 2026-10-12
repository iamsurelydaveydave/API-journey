import { createApp } from "./app";

const port = Number(process.env.PORT ?? 8080); // prefer 8080 to match Fly default

const app = createApp();

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});
