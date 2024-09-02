[@antondegliminil/data-filter](../README.md) / [Exports](../modules.md) / FilterExpression

# Interface: FilterExpression

Defines the logic for a single filter expression.

## Table of contents

### Properties

- [field](FilterExpression.md#field)
- [id](FilterExpression.md#id)
- [operator](FilterExpression.md#operator)
- [value](FilterExpression.md#value)

## Properties

### field

• **field**: `string`

Field of the item to test.

#### Defined in

[src/types/filter.types.ts:26](https://github.com/liminillabs/Data-Filter/blob/214e966/src/types/filter.types.ts#L26)

___

### id

• **id**: `string` \| `number`

ID Field

#### Defined in

[src/types/filter.types.ts:22](https://github.com/liminillabs/Data-Filter/blob/214e966/src/types/filter.types.ts#L22)

___

### operator

• **operator**: [`Operators`](../modules.md#operators)

Validation operator

#### Defined in

[src/types/filter.types.ts:30](https://github.com/liminillabs/Data-Filter/blob/214e966/src/types/filter.types.ts#L30)

___

### value

• **value**: [`FilterValue`](../modules.md#filtervalue)

Value to test against.

#### Defined in

[src/types/filter.types.ts:34](https://github.com/liminillabs/Data-Filter/blob/214e966/src/types/filter.types.ts#L34)
