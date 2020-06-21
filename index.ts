import { nexo } from "./deps.ts";
import boot from "./lib/boot.tsx";

await nexo({
  boot,
  hotImport: (m) => import(m),
});
