[@antondegliminil/data-filter](README.md) / Exports

# @antondegliminil/data-filter

## Table of contents

### Classes

- [DataFilterService](classes/DataFilterService.md)
- [FilterError](classes/FilterError.md)

### Interfaces

- [FilterExpression](interfaces/FilterExpression.md)
- [SortExpression](interfaces/SortExpression.md)

### Type Aliases

- [Conditions](modules.md#conditions)
- [Expression](modules.md#expression)
- [FilterValue](modules.md#filtervalue)
- [ItemValue](modules.md#itemvalue)
- [LogicalExpression](modules.md#logicalexpression)
- [Operators](modules.md#operators)
- [SortDirection](modules.md#sortdirection)

## Type Aliases

### Conditions

Ƭ **Conditions**: ``"and"`` \| ``"or"``

#### Defined in

[src/types/filter.types.ts:9](https://github.com/liminillabs/Data-Filter/blob/214e966/src/types/filter.types.ts#L9)

___

### Expression

Ƭ **Expression**: [`FilterExpression`](interfaces/FilterExpression.md) \| [`LogicalExpression`](modules.md#logicalexpression)

Allows both expression to be passed in a single type.

#### Defined in

[src/types/filter.types.ts:58](https://github.com/liminillabs/Data-Filter/blob/214e966/src/types/filter.types.ts#L58)

___

### FilterValue

Ƭ **FilterValue**: `string` \| `number` \| `boolean`

#### Defined in

[src/types/filter.types.ts:13](https://github.com/liminillabs/Data-Filter/blob/214e966/src/types/filter.types.ts#L13)

___

### ItemValue

Ƭ **ItemValue**: `string` \| `number` \| `boolean`

#### Defined in

[src/types/filter.types.ts:15](https://github.com/liminillabs/Data-Filter/blob/214e966/src/types/filter.types.ts#L15)

___

### LogicalExpression

Ƭ **LogicalExpression**: `Object`

Defines the logic for a set of filters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | [`Conditions`](modules.md#conditions) | Defines how the expressions are validated as a set. |
| `expressions` | [`Expression`](modules.md#expression)[] | A set of expressions, either [LogicalExpression](modules.md#logicalexpression) or [FilterExpression](interfaces/FilterExpression.md) |
| `sort?` | [`SortExpression`](interfaces/SortExpression.md) | Defines how to sort the data once the filter is completed. |

#### Defined in

[src/types/filter.types.ts:40](https://github.com/liminillabs/Data-Filter/blob/214e966/src/types/filter.types.ts#L40)

___

### Operators

Ƭ **Operators**: ``"="`` \| ``"!="`` \| ``"<"`` \| ``">"`` \| ``"<="`` \| ``">="`` \| ``"contains"`` \| ``"beginsWith"`` \| ``"endsWith"`` \| ``"doesNotContain"`` \| ``"doesNotBeginWith"`` \| ``"doesNotEndWith"`` \| ``"null"`` \| ``"notNull"`` \| ``"in"`` \| ``"notIn"`` \| ``"between"`` \| ``"notBetween"``

#### Defined in

[src/types/filter.types.ts:5](https://github.com/liminillabs/Data-Filter/blob/214e966/src/types/filter.types.ts#L5)

___

### SortDirection

Ƭ **SortDirection**: ``"asc"`` \| ``"desc"``

#### Defined in

[src/types/filter.types.ts:11](https://github.com/liminillabs/Data-Filter/blob/214e966/src/types/filter.types.ts#L11)
