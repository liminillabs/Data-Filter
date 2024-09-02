[@antondegliminil/data-filter](../README.md) / [Exports](../modules.md) / DataFilterService

# Class: DataFilterService<T\>

Allows for an array of data to be filtered by a set of expressions.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](DataFilterService.md#constructor)

### Methods

- [beginsWith](DataFilterService.md#beginswith)
- [between](DataFilterService.md#between)
- [contains](DataFilterService.md#contains)
- [endsWith](DataFilterService.md#endswith)
- [evaluateExpression](DataFilterService.md#evaluateexpression)
- [evaluateLogicalExpression](DataFilterService.md#evaluatelogicalexpression)
- [evaluateSortExpression](DataFilterService.md#evaluatesortexpression)
- [filterData](DataFilterService.md#filterdata)
- [in](DataFilterService.md#in)
- [sortData](DataFilterService.md#sortdata)

## Constructors

### constructor

• **new DataFilterService**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

## Methods

### beginsWith

▸ `Private` **beginsWith**(`filterValue`, `itemValue`): `boolean`

Tests if the itemValue begins with the filterValue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterValue` | [`FilterValue`](../modules.md#filtervalue) | The value of the filter. |
| `itemValue` | [`ItemValue`](../modules.md#itemvalue) | The value to validate against. |

#### Returns

`boolean`

true if the itemValue begins with the filterValue.

#### Defined in

[src/services/data-filter.service.ts:51](https://github.com/liminillabs/Data-Filter/blob/214e966/src/services/data-filter.service.ts#L51)

___

### between

▸ `Private` **between**(`filterValue`, `itemValue`): `boolean`

Tests if the itemValue is between two values in filterValue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterValue` | [`FilterValue`](../modules.md#filtervalue) | A comma separated string with two values. |
| `itemValue` | [`ItemValue`](../modules.md#itemvalue) | The value to validate against. |

#### Returns

`boolean`

true if the itemValue is between the first and second values in filterValue.

#### Defined in

[src/services/data-filter.service.ts:71](https://github.com/liminillabs/Data-Filter/blob/214e966/src/services/data-filter.service.ts#L71)

___

### contains

▸ `Private` **contains**(`filterValue`, `itemValue`): `boolean`

Tests if itemValue contains filterValue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterValue` | [`FilterValue`](../modules.md#filtervalue) | The value of the filter. |
| `itemValue` | [`ItemValue`](../modules.md#itemvalue) | The item to validate against. |

#### Returns

`boolean`

true if itemValue contains filterValue.

#### Defined in

[src/services/data-filter.service.ts:41](https://github.com/liminillabs/Data-Filter/blob/214e966/src/services/data-filter.service.ts#L41)

___

### endsWith

▸ `Private` **endsWith**(`filterValue`, `itemValue`): `boolean`

Tests if the itemValue ends with the filterValue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterValue` | [`FilterValue`](../modules.md#filtervalue) | The value of the filter. |
| `itemValue` | [`ItemValue`](../modules.md#itemvalue) | The value to validate against. |

#### Returns

`boolean`

true if the itemValue ends with the filterValue.

#### Defined in

[src/services/data-filter.service.ts:61](https://github.com/liminillabs/Data-Filter/blob/214e966/src/services/data-filter.service.ts#L61)

___

### evaluateExpression

▸ **evaluateExpression**(`expression`, `item`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | [`FilterExpression`](../interfaces/FilterExpression.md) | A [FilterExpression](../interfaces/FilterExpression.md) used to filter the data. |
| `item` | `T` | Item to be test the expression against. |

#### Returns

`boolean`

true if it passes the filter expression, otherwise false.

#### Defined in

[src/services/data-filter.service.ts:129](https://github.com/liminillabs/Data-Filter/blob/214e966/src/services/data-filter.service.ts#L129)

___

### evaluateLogicalExpression

▸ **evaluateLogicalExpression**(`expression`, `item`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | [`LogicalExpression`](../modules.md#logicalexpression) | A [LogicalExpression](../modules.md#logicalexpression) that defines the filter. |
| `item` | `T` | Item to be test the expression against |

#### Returns

`boolean`

returns true if the item passes the expression, otherwise false.

#### Defined in

[src/services/data-filter.service.ts:166](https://github.com/liminillabs/Data-Filter/blob/214e966/src/services/data-filter.service.ts#L166)

___

### evaluateSortExpression

▸ **evaluateSortExpression**<`T`\>(`expression`, `a`, `b`): `number`

Evaluates a sort expression and compares two objects based on the expression.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | [`SortExpression`](../interfaces/SortExpression.md) | The sort expression to evaluate. |
| `a` | `T` | The first object to compare. |
| `b` | `T` | The second object to compare. |

#### Returns

`number`

The result of the comparison.
If a is greater than b, returns a positive number.
If a is less than b, returns a negative number.
If a and b are equal, returns 0.

#### Defined in

[src/services/data-filter.service.ts:212](https://github.com/liminillabs/Data-Filter/blob/214e966/src/services/data-filter.service.ts#L212)

___

### filterData

▸ **filterData**(`expression`, `items`): `T`[]

Filters an array of items based on a logical expression and optionally sorts the result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | [`LogicalExpression`](../modules.md#logicalexpression) | The logical expression used for filtering. |
| `items` | `T`[] | The array of items to be filtered. |

#### Returns

`T`[]

The filtered array of items, sorted if specified in the expression.

#### Defined in

[src/services/data-filter.service.ts:16](https://github.com/liminillabs/Data-Filter/blob/214e966/src/services/data-filter.service.ts#L16)

___

### in

▸ `Private` **in**(`filterValue`, `itemValue`): `boolean`

Tests if the itemValue is in an a set values in filterValue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterValue` | [`FilterValue`](../modules.md#filtervalue) | A comma separated string of values. |
| `itemValue` | [`ItemValue`](../modules.md#itemvalue) | The value to validate against. |

#### Returns

`boolean`

true if the itemValue is in the array of value in filterValue.

#### Defined in

[src/services/data-filter.service.ts:98](https://github.com/liminillabs/Data-Filter/blob/214e966/src/services/data-filter.service.ts#L98)

___

### sortData

▸ **sortData**(`expression`, `items`): `T`[]

Sorts the given array of items based on the provided sort expression.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | [`SortExpression`](../interfaces/SortExpression.md) | The sort expression defining the sorting criteria. |
| `items` | `T`[] | The array of items to be sorted. |

#### Returns

`T`[]

The filtered array of items.

#### Defined in

[src/services/data-filter.service.ts:30](https://github.com/liminillabs/Data-Filter/blob/214e966/src/services/data-filter.service.ts#L30)
