# Week 1

## Core Questions

### What is a token in AnyScript?

A token is the smallest syntax unit the parser should care about:
- keywords: `let`, `const`, `function`, `if`, `while`, `return`, `satisfies`
- identifiers
- literals
- punctuation: `(` `)` `{` `}` `,` `:` `;` `.`
- operators: `=` `+` `-` `*` `/` `==` `!=` `<` `<=` `>` `>=` `|`

### What AST nodes exist in V1?

Expressions:
- `LiteralExpr`
- `IdentifierExpr`
- `BinaryExpr`
- `AssignExpr`
- `CallExpr`
- `PropertyExpr`
- `ObjectLiteralExpr`
- `SatisfiesExpr`
- `AsConstExpr`

Statements:
- `VarDeclStmt`
- `FunctionDeclStmt`
- `BlockStmt`
- `IfStmt`
- `WhileStmt`
- `ReturnStmt`
- `ExprStmt`

Types:
- `PrimitiveTypeNode`
- `ObjectTypeNode`
- `UnionTypeNode`

### Which phase owns which errors?

| Error | Phase |
| --- | --- |
| bad character like `@` | lexing |
| missing `)` | parsing |
| unknown variable name | binding |
| assigning string to number | type checking |
| invalid `satisfies` target | type checking |

### Which syntax is checker-only?

- type annotations
- union types
- object type syntax
- `satisfies`
- `as const`

These affect analysis but are erased from emitted JavaScript.
