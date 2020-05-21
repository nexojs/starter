import { h } from "preact";
import { Ctx, jsx } from "nexo";
import { Head } from "../components/head.tsx";
import { Welcome } from "../components/welcome.tsx";

const globals = globalThis as any;
globals.visitorCount = globals.visitorCount || 0;

export default function ({ router, render, client }: Ctx) {
  router.get("/", async (ctx: any) => {
    const name = ctx.request.url.searchParams.get("name") || undefined;
    globals.visitorCount++;

    const title = "Your App is ready";

    let html = render(() => ({
      title,
      head: jsx(<Head />),
      body: jsx(
        <Welcome
          title={title}
          name={name}
          visitorCount={globals.visitorCount}
        />,
      ) + client.bundle.html,
    }));

    ctx.response.body = html;
  });
}
