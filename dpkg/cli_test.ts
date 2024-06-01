import { dpkg } from "./cli.ts";
import { assert as ok, assertEquals as equals } from "jsr:@std/assert@0.225.3";
import { pathFinder } from "@gnome/exec/path-finder";

const hasApt = pathFinder.findExeSync("dpkg") !== undefined;

Deno.test({
    name: "dpkg",
    ignore: !hasApt,
    fn: async () => {
        const result = await dpkg("--version");
        equals(result.code, 0);
        ok(result.text().startsWith("Debian"));
    },
});
