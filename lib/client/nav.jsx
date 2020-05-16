// @deno-types=https://deno.land/std/react/react.d.ts
const { preact } = window.deps;
const { h, render } = preact;

const Button = function ({ children, ...props }) {
  return <a target="_blank" class="button" {...props}>{children}</a>;
};

const Nav = function () {
  return (<nav>
    <Button href="https://github.com/nexojs/nexo">Nexo</Button>&nbsp;
    <Button href="https://github.com/oakserver/oak">Oak</Button>&nbsp;
    <Button href="https://github.com/preactjs/preact">Preact</Button>&nbsp;
  </nav>);
};

render(<Nav />, document.querySelector("#nav"));
