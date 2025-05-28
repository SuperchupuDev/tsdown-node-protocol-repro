import { createRequire } from "node:module";
import { join } from "path";

//#region rolldown:runtime
var __require = /* @__PURE__ */ createRequire(import.meta.url);

//#endregion
//#region src/index.ts
console.log(join("this is a", "path"));
function myCoolRequire() {
	return __require.resolve("picomatch");
}

//#endregion
export { myCoolRequire };