# AnyScript V1 Spec

## Purpose

AnyScript is a tiny TypeScript-like language used to study:
- tokenization
- parsing
- scope binding
- type checking
- checker-only syntax
- type erasure

It is not a runtime language with new semantics. It compiles to plain JavaScript.

## Files

- Source files use the `.any` extension.
- Output files are JavaScript with type syntax erased.

## Pipeline

```text
source -> tokens -> AST -> binding -> type-check -> emit JS
```

## Syntax

Declarations:
- `let name = expr;`
- `let name: Type = expr;`
- `const name = expr;`
- `const name: Type = expr;`
- `function add(a: number, b: number): number { return a + b; }`

Statements:
- block: `{ ... }`
- expression statement: `expr;`
- `if (expr) stmt else stmt`
- `while (expr) stmt`
- `return expr;`

Expressions:
- literals: number, string, boolean, `null`
- identifiers
- grouping: `(expr)`
- binary ops: `+ - * / == != < <= > >=`
- assignment: `name = expr`
- function call: `foo(a, b)`
- object literal: `{ key: expr, other: expr }`
- property access: `obj.key`
- `expr satisfies Type`
- `expr as const`

## Types

Primitive types:
- `number`
- `string`
- `boolean`
- `null`

Composite types:
- object types: `{ port: number, mode: string }`
- unions: `string | number`, `string | null`

## Checker Rules

- variables must be declared before use
- `const` cannot be reassigned
- annotated assignment must be type-compatible
- object assignability is structural
- union values can be narrowed inside control-flow branches
- `expr satisfies Type`
  - validates assignability
  - does not change runtime emit
  - should preserve the original expression type as much as possible
- `expr as const`
  - checker-only
  - valid only on literals in V1
  - preserves literal precision instead of widening immediately

## Emit Rules

Erase:
- type annotations
- type declarations in function parameters / return positions
- `satisfies`
- `as const`

Example:

```ts
const cfg = { mode: "dev", port: 3000 } satisfies { mode: string, port: number };
```

emits:

```js
const cfg = { mode: "dev", port: 3000 };
```

## Diagnostics

Every error should belong to one phase:
- lexing
- parsing
- binding
- type checking
