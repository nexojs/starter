import { nexo } from "nexo";
import boot from "./lib/boot.tsx";

await nexo({
  boot,
  hotImport: (m) => import(m),
});
