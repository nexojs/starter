import { h, render, css, setup, hydrate } from "../../cliDeps.ts";

setup({});
hydrate();

const NavClass = css({
  display: "flex",
  justifyContent: "center",
});

const ButtonClass = css({
  padding: "1rem 3rem",
  color: "#234",
  textDecoration: "none",
  fontSize: "1.7rem",
  marginRight: "2rem",
  ":last-child": {
    marginRight: "0",
  },
  ":hover": {
    backgroundColor: "#357",
    color: "#fffe",
  },
});

const Button = function ({ children, ...props }: any) {
  return <a target="_blank" class={ButtonClass} {...props}>{children}</a>;
};

const Nav = function () {
  return (<nav class={NavClass}>
    <Button href="https://github.com/nexojs/nexo">🎒 Nexo</Button>&nbsp;
    <Button href="https://github.com/oakserver/oak">🌳 Oak</Button>&nbsp;
    <Button href="https://github.com/preactjs/preact">⚛️ Preact</Button>&nbsp;
    <Button href="https://github.com/kripod/otion">🌊 Otion</Button>&nbsp;
  </nav>);
};

render(<Nav />, document.querySelector("#nav"));
