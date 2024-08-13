import { DataFilterService } from "../../services";
import { FilterError, FilterExpression, LogicalExpression } from "../../types";
import { FilterTestItem } from '../common'


it('Filter Service test', () => {
    let expander = new DataFilterService<FilterTestItem>();

    expect(expander).not.toBeUndefined();
});


it("Filter Service < test item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "age",
        operator: "<",
        value: 40,
        id: 1
    }

    const user = {
        name: "Adam",
        age: 30
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service >= item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "age",
        operator: ">=",
        value: 40,
        id : 1
    }

    const user = {
        name: "Adam",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service = item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "age",
        operator: "=",
        value: 40,
        id : 1
    }

    const user = {
        name: "Adam",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service <= item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "age",
        operator: "<=",
        value: 40,
        id : 1
    }

    const user = {
        name: "Adam",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service contains item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "contains",
        value: "da",
        id : 1
    }

    const user = {
        name: "Adam",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service does not contains item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "doesNotContain",
        value: "ze",
        id : 1
    }

    const user = {
        name: "Adam",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service != item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "age",
        operator: "!=",
        value: 45,
        id : 1
    }

    const user = {
        name: "Adam",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service beginsWith item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "beginsWith",
        value: "A",
        id : 1
    }

    const user = {
        name: "Adam",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service does not beginsWith item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "doesNotBeginWith",
        value: "B",
        id : 1
    }

    const user = {
        name: "Adam",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service endsWith item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "endsWith",
        value: "m",
        id : 1
    }

    const user = {
        name: "Adam",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service does not endsWith item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "doesNotEndWith",
        value: "A",
        id : 1
    }

    const user = {
        name: "Adam",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service is null item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "null",
        value: "",
        id : 1
    }

    const user = {
        name: null,
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service is not null item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "notNull",
        value: "",
        id : 1
    }

    const user = {
        name: "Adam",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service between numbers item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "age",
        operator: "between",
        value: "35, 45",
        id : 1
    }

    const user = {
        name: "Adam",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service not between numbers item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "age",
        operator: "notBetween",
        value: "35, 45",
        id : 1
    }

    const user = {
        name: "Adam",
        age: 46
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service between string item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "between",
        value: "Adam, James",
        id : 1
    }

    const user = {
        name: "Fred",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service not between string item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "notBetween",
        value: "Adam, Fred",
        id : 1
    }

    const user = {
        name: "James",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})


it("Filter Service in string item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "in",
        value: "Adam, James, Fred",
        id : 1
    }

    const user = {
        name: "Fred",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service not in string item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "notIn",
        value: "Adam, James, Fred",
        id : 1
    }

    const user = {
        name: "Freddy",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service in number item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "age",
        operator: "in",
        value: "30, 40, 50",
        id : 1
    }

    const user = {
        name: "Fred",
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service not in number item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "age",
        operator: "notIn",
        value: "30, 40, 50",
        id : 1
    }

    const user = {
        name: "Fred",
        age: 45
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service null (undefined) item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "null",
        value: "Fred",
        id : 1
    }

    const user = {
        name: undefined,
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeTruthy();
})

it("Filter Service not null (undefined) item", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: FilterExpression = {
        field: "name",
        operator: "notNull",
        value: "Fred",
        id : 1
    }

    const user = {
        name: undefined,
        age: 40
    }

    let result = filter.evaluateExpression(expression, user)

    expect(result).toBeFalsy();
})



it("Filter Service Test not expressions", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: LogicalExpression = {
        condition: "and",
        expressions: []
    }

    const user = {
        name: "Fred",
        age: 40
    }


    try {
        let result = filter.evaluateLogicalExpression(expression, user)
        fail('Should have thrown an error');

    } catch (ex) {
        expect(ex).toBeInstanceOf(FilterError);
        expect(ex.message).toBe("Logical Expression contains no filter expressions.")
    }


})


it("Filter Service Test items", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: LogicalExpression = {
        condition: "and",
        expressions: [{
            field: "age",
            operator: "<",
            value: 40,
            id : 1
        }]
    }

    const people = [
        { name: 'Adam', age: 35 },
        { name: 'Bob', age: 41 },
        { name: 'Carl', age: 29 },
        { name: 'Dennis', age: 52 },
    ];

    const expectedResult = [
        { name: 'Adam', age: 35 },
        { name: 'Carl', age: 29 },
    ]

    let result = filter.filterData(expression, people)

    expect(result).toStrictEqual(expectedResult)

})




it("Filter Service Expression item false", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: LogicalExpression = {
        condition: 'and',
        expressions: [
            {
                field: 'age',
                operator: '>',
                value: 40,
                id : 1
            },
            {
                condition: 'or',
                expressions: [
                    {
                        field: 'name',
                        operator: 'beginsWith',
                        value: 'A',
                        id : 2
                    },
                    {
                        field: 'name',
                        operator: 'beginsWith',
                        value: 'B',
                        id: 3
                    },
                ],
            },
        ],
    };

    let result = filter.evaluateLogicalExpression(expression, { name: 'Barton', age: 27 })

    expect(result).toBeFalsy();

})



it("Filter Service Expression item true", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: LogicalExpression = {
        condition: 'and',
        expressions: [
            {
                field: 'age',
                operator: '>',
                value: 40,
                id: 1
            },
            {
                condition: 'or',
                expressions: [
                    {
                        field: 'name',
                        operator: 'beginsWith',
                        value: 'A',
                        id : 2
                    },
                    {
                        field: 'name',
                        operator: 'beginsWith',
                        value: 'B',
                        id: 3
                    },
                ],
            },
        ],
    };

    let result = filter.evaluateLogicalExpression(expression, { name: 'Barton', age: 45 })

    expect(result).toBeTruthy();

})


it("Filter Service Expression items", () => {

    let filter = new DataFilterService<FilterTestItem>();

    const expression: LogicalExpression = {
        condition: 'and',
        expressions: [
            {
                field: 'age',
                operator: '>',
                value: 40,
                id: 1
            },
            {
                condition: 'or',
                expressions: [
                    {
                        field: 'name',
                        operator: 'beginsWith',
                        value: 'A',
                        id: 2
                    },

                    {
                        field: 'name',
                        operator: 'beginsWith',
                        value: 'B',
                        id: 3
                    },
                ],
            },
        ],
    };

    const people = [
        { name: 'Elsworth', age: 41 },
        { name: 'Xenos', age: 45 },
        { name: 'Debra', age: 90 },
        { name: 'Allen', age: 4 },
        { name: 'Malissia', age: 18 },
        { name: 'Patric', age: 55 },
        { name: 'Minni', age: 84 },
        { name: 'Alberik', age: 63 },
        { name: 'Euell', age: 10 },
        { name: 'Barton', age: 43 },
    ];

    const expectedResult = [
        { name: 'Alberik', age: 63 },
        { name: 'Barton', age: 43 }
    ]

    let result = filter.filterData(expression, people)

    expect(result).toStrictEqual(expectedResult)

})