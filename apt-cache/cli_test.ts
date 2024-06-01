import { aptCache } from "./cli.ts";
import { assert as ok, assertEquals as equals } from "jsr:@std/assert@0.225.3";
import { pathFinder } from "@gnome/exec/path-finder";

const hasApt = pathFinder.findExeSync("apt-cache") !== undefined;

Deno.test({
    name: "apt-cache",
    ignore: !hasApt,
    fn: async () => {
        const result = await aptCache("--version");
        equals(result.code, 0);
        ok(result.text().startsWith("apt"));
    },
});
