import tpl from "../templates/default.ts";
import { h, Fragment } from "preact";
import { Ctx } from "nexo";

const globals = globalThis as any;
globals.renderCount = globals.renderCount || 0;

const Hello = function ({ name }) {
  globals.renderCount++;

  return <Fragment>
    <section class="hero is-fullheight is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Nexo Starter is ready
          </h1>
          <h2 class="subtitle">
            Visitor count: {globals.renderCount}
          </h2>
          {name && <p>
            Hello {name}, have a nice day!
          </p>}
          <br />
          <div id="nav" />
        </div>
      </div>
    </section>
  </Fragment>;
};

export default function ({ router, render, client }: Ctx) {
  router.get("/", async (ctx: any) => {
    const name = ctx.request.url.searchParams.get("name") || undefined;
    ctx.response.body = tpl({
      head: `
        <title>Nexo Starter is ready</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">
      `,
      body: render(<Hello name={name} />) + client.deps.html + client.nav.html,
    });
  });
}
