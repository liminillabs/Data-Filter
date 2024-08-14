# Data-Filter

The data filter service allow for an array of data to be filtered against a set of expressions.

The filter is designed to be used with [https://react-querybuilder.js.org/](https://react-querybuilder.js.org/) on the UX.

The DataFilterService can filter an array or validate a single item.


Example to filter an array.

```typescript

    let filterService = new DataFilterService<FilterTestItem>();

    const expression: LogicalExpression = {
        condition: "and",
        expressions: [{
            field: "age",
            operator: "<",
            value: 40
        }]
    }

    const people = [
        { name: 'Adam', age: 35 },
        { name: 'Bob', age: 41 },
        { name: 'Carl', age: 29 },
        { name: 'Dennis', age: 52 },
    ];


    let result = filterService.filterData(expression, people)

```




#### Operators

Operators provide a way to validate between left and right values.

If you have an expression CostCenter = "ABC21" We can break that into the following:

Left value: CostCenter

Operator: =

Right value: "ABC21"

The left value is always evaluated against the right value.

If we have ABC23 \> ABC21

This will evaluate as true because the left is greater than the right value.

Alternatively, ABC23 \< ABC21 will evaluate as false.

Although the right is always evaluated against the left. With string evaluation, it is difficult to express in a direct expression.

The system will support the following operators:

| **Name** | **Operator** | **True when** | **Example** |
| --- | --- | --- | --- |
| Equals | = | Values are equal | A = A |
| Not equal | != | Values not equal | A != B |
| Less than | \< | Left value is less than the right value. | A \< B |
| Greater than | \> | Left value is greater than the right value. | B \> A |
| Less than or equals | \<= | Left value is less than or equals the right value. | A \<= B and A \>= A |
| Greater than | \>= | Left value is greater than or equals the right value. | B \>= A and B \>= B |
| Contains | contains | Left value is contained with the right value. | "Freddy" contain "red" |
| Begins with | beginsWith | Right value starts with the value of the left value. | "Freddy" beginsWith "Fred" |
| Ends with | endsWith | Right value ends with the value of the left value. | "Freddy" ends with "dy" |
| Does not contain | doesNotContain | Left value is not contained within right value. The opposite of contains. | "Freddy" does not contain "blue" |
| Does not begin with | doesNotBeginWith | Right values does not start with left value. Opposite of beginsWith. |
 |
| Does not end with | doesNotEndWith | Right value does not end with left value. Opposite of endsWidth |
 |
| Null | Null | Right value equal null or undefined. |
 |
| Not null | notNull | Right value is not null or not undefined |
 |
| In | in | With left value being an array (1, 3, 5, 6) and right value being 5. Then right value is in left value. | 5 in (1,3,5,6) |
| NotIn | notIn | With left value being an array (1,3,5,6) and right value being 4. Then right values is not in left value. | 4 not in (1,3,5,6) |
| Between | between | With left value being (1, 10) and right value being 4. Then right value is between left values. | 4 between 1, 10 |
| Not between | notBetween | With left value being (1, 10) and right value 11. Then right value is not between left values. | 11 not between 1, 10 |


## Conditions and Expressions

Conditions allow the filter to work with sets of expressions. The two conditions are "or", "and".

These describe how expressions work together.

##### OR:

Once all the individual expressions have been evaluated.

If any of the expressions are true, then the set is true.

##### AND:

Once all the individual expressions have been evaluated.

Only If ALL the expressions are true, then the set is true.

**Note**: Groups of expressions and be grouped into groups.

## Sorting

This needs somethings more