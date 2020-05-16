export default ({
  head = "",
  body = "",
  bodyAttrs = "",
}) => {
  return `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${head}
  </head>
  <body ${bodyAttrs}>
    ${body}
  </body>
</html>
  `;
};
