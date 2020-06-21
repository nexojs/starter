import { h, Fragment, css } from "../../cliDeps.ts";

export const Welcome = function ({ title, name, visitorCount }) {
  return <Fragment>
    <div
      class={css({
        backgroundColor: "#dee",
        color: "#334",
        margin: "3rem auto",
        padding: "5rem",
        width: "70%",
        "& h1": {
          marginTop: "0",
          fontSize: "4rem",
        },
      })}
    >
      <h1>
        {title}
      </h1>

      <small>
        Visitor count: {visitorCount}
      </small>
      {name && <p>
        Hello {name}, have a nice day!
      </p>}
    </div>
    <div id="nav" />
  </Fragment>;
};
