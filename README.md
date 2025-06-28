# tsdown comments in isolated declarations repro

- `isolatedDeclarations` is set to `true`
- `src/index.ts` has comments
- `dist/index.d.mts` also has comments
- it doesn't if `isolatedDeclarations` is set to `false`
