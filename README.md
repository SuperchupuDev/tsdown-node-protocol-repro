# tsdown node protocol repro

- target is node12
- `src/index.ts` imports `node:path`
- the `dist` javascript files keep the `node:` prefix, making it not work on node 12
