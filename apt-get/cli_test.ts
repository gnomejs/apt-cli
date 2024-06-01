import { aptGet } from "./cli.ts";
import { assert as ok, assertEquals as equals } from "jsr:@std/assert@0.225.3";
import { pathFinder } from "@gnome/exec/path-finder";

const hasApt = pathFinder.findExeSync("apt-get") !== undefined;

Deno.test({
    name: "apt-get",
    ignore: !hasApt,
    fn: async () => {
        const result = await aptGet("--version");
        equals(result.code, 0);
        ok(result.text().startsWith("apt"));
    },
});
