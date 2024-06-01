# @gnome/apt-cli

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `apt-cli` module provides a simple way to execute
apt commands.

The module includes apt-get, apt-cache, apt-mark, apt-key,
apt-add-repository, dpkg.

The module relies upon the @gnome/exec module and
has the same basic usage as the `Command` and `ShellCommand` class.

## Basic Usage

```typescript
import { apt } from "@gnome/apt-cli";
 
const result = await apt("--version");
console.log(result.code);
console.log(result.text());

```

[MIT License](./LICENSE.md)
