# AnyScript Plan

Goal:
- build a tiny TypeScript-like front-end
- learn parsing, binding, type checking, and type erasure
- stay small enough to finish

V1 features:
- `let`, `const`, `function`
- blocks, `if`, `while`, `return`
- primitive types: `number`, `string`, `boolean`, `null`
- object types
- union types
- `typeof` / `null` narrowing
- `satisfies`
- `as const`
- JavaScript emit by stripping type-only syntax

V1 non-features:
- classes
- imports/modules
- JSX
- decorators
- enums
- overloads
- advanced generics

Week 1 deliverables:
- repo scaffold
- V1 spec
- sample `.any` programs
- phase ownership notes
- tiny CLI stub

Milestone ladder:
1. lexer
2. parser
3. AST printer / JS subset emit
4. binder
5. primitive type checker
6. object + union types
7. narrowing
8. `satisfies` / `as const`
9. polish and diagnostics
