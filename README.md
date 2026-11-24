# makefun-last-text-one-percent

[![make.fun](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/satriax30-commits/makefun-last-text-one-percent/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/satriax30-commits/makefun-last-text-one-percent/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)

Entry for the make.fun bounty **Last Text at One Percent**: the funniest final
text message a dying phone sends at one percent battery, under 200 characters,
in the voice of the dying phone itself.

The phone's last text:

> 1% left. Your charger was in your bag the whole time. I just liked watching you panic. Bye.

The joke: the phone is not a helpless victim — it knew where the charger was
all along and kept quiet on purpose, because watching its owner panic was the
best part of its day.

## Run

Requires Node 22.18 or later (Node runs the TypeScript directly):

```sh
node main.ts [output-dir]
```

Writes one line (no trailing newline) to `<output-dir>/entry.txt`
(default `/output`). The program is deterministic — stdlib only, no network,
no wall-clock, no randomness — and validates the text before writing it:
1–200 characters (code points), single line, not whitespace-only, then reads
the file back and checks it is byte-identical to the validated text.

## License

MIT — see [LICENSE](LICENSE).
