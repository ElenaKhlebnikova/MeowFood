import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get("api/meals", (req, res, ctx) => {
    return res(ctx.json);
  })
);

worker.start();
