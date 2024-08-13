[@liminil/data-filter](README.md) / Exports

# @liminil/data-filter

## Table of contents

### Classes

- [DataFilterService](classes/DataFilterService.md)
- [FilterError](classes/FilterError.md)

### Interfaces

- [FilterExpression](interfaces/FilterExpression.md)

### Type Aliases

- [Conditions](modules.md#conditions)
- [Expression](modules.md#expression)
- [FilterValue](modules.md#filtervalue)
- [ItemValue](modules.md#itemvalue)
- [LogicalExpression](modules.md#logicalexpression)
- [Operators](modules.md#operators)

## Type Aliases

### Conditions

Ƭ **Conditions**: ``"and"`` \| ``"or"``

#### Defined in

src/types/filter.types.ts:9

___

### Expression

Ƭ **Expression**: [`FilterExpression`](interfaces/FilterExpression.md) \| [`LogicalExpression`](modules.md#logicalexpression)

Allows both expression to be passed in a single type.

#### Defined in

src/types/filter.types.ts:50

___

### FilterValue

Ƭ **FilterValue**: `string` \| `number` \| `boolean`

#### Defined in

src/types/filter.types.ts:11

___

### ItemValue

Ƭ **ItemValue**: `string` \| `number` \| `boolean`

#### Defined in

src/types/filter.types.ts:13

___

### LogicalExpression

Ƭ **LogicalExpression**: `Object`

Defines the logic for a set of filters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | [`Conditions`](modules.md#conditions) | Defines how the expressions are validated as a set. |
| `expressions` | [`Expression`](modules.md#expression)[] | A set of expressions, either [LogicalExpression](modules.md#logicalexpression) or [FilterExpression](interfaces/FilterExpression.md) |

#### Defined in

src/types/filter.types.ts:36

___

### Operators

Ƭ **Operators**: ``"="`` \| ``"!="`` \| ``"<"`` \| ``">"`` \| ``"<="`` \| ``">="`` \| ``"contains"`` \| ``"beginsWith"`` \| ``"endsWith"`` \| ``"doesNotContain"`` \| ``"doesNotBeginWith"`` \| ``"doesNotEndWith"`` \| ``"null"`` \| ``"notNull"`` \| ``"in"`` \| ``"notIn"`` \| ``"between"`` \| ``"notBetween"``

#### Defined in

src/types/filter.types.ts:5
