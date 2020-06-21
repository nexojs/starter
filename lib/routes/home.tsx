import { Ctx, renderToString } from "../../deps.ts";
import { h } from '../../cliDeps.ts';
import { Head } from "../components/head.tsx";
import { Welcome } from "../components/welcome.tsx";

const globals = globalThis as any;
globals.visitorCount = globals.visitorCount || 0;

export default function ({ router, renderPage, client }: Ctx) {
  router.get("/", async (ctx: any) => {
    const name = ctx.request.url.searchParams.get("name") || undefined;
    globals.visitorCount++;

    const title = "Your App is ready";

    let html;

    try {
      html = renderPage(() => ({
        title,
        head: renderToString(<Head />),
        body: renderToString(
          <Welcome
            title={title}
            name={name}
            visitorCount={globals.visitorCount}
          />,
        ) + client.bundle.html,
      }));
    } catch(err) {
      console.error(err)
    }

    ctx.response.body = html;
  });
}
