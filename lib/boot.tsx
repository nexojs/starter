import home from "./routes/home.tsx";
import { Ctx } from "nexo";

export default function (ctx: Ctx) {
  const { app, router, files } = ctx;

  home(ctx);

  app.use(router.routes());
  app.use(router.allowedMethods());
  app.use(files);

  app.use(function (ctx: any) {
    ctx.response.body = "404";
    ctx.response.status = 404;
  });
}
