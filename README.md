# AnyScript

AnyScript is a tiny TypeScript-like compiler front-end for learning how real
language tooling works.

V1 goal:
- parse typed source files
- bind names and scopes
- type-check a small TS-like subset
- emit plain JavaScript by erasing types

V1 non-goals:
- classes
- modules/imports
- JSX
- decorators
- async/await
- advanced generics

Project layout:
- `PLAN.md` — project contract and milestone ladder
- `SPEC.md` — the V1 language definition
- `examples/` — sample `.any` programs
- `notes/` — weekly reasoning notes
- `src/` — compiler code

Expected pipeline:

```text
source -> tokens -> AST -> binding -> type-check -> JS emit
```

Week 1 intentionally stops before parser implementation. The point is to freeze
scope first so later code has a stable target.
