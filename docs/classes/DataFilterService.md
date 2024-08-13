[@liminil/data-filter](../README.md) / [Exports](../modules.md) / DataFilterService

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
- [filterData](DataFilterService.md#filterdata)
- [in](DataFilterService.md#in)

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

src/services/data-filter.service.ts:34

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

src/services/data-filter.service.ts:54

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

src/services/data-filter.service.ts:24

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

src/services/data-filter.service.ts:44

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

src/services/data-filter.service.ts:112

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

src/services/data-filter.service.ts:149

___

### filterData

▸ **filterData**(`expression`, `items`): `T`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | [`LogicalExpression`](../modules.md#logicalexpression) | A [LogicalExpression](../modules.md#logicalexpression) that defines the filter. |
| `items` | `T`[] | to be filtered. |

#### Returns

`T`[]

filtered items.

#### Defined in

src/services/data-filter.service.ts:14

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

src/services/data-filter.service.ts:81
