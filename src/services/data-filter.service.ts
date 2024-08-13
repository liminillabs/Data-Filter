import { FilterError, FilterExpression, FilterValue, ItemValue, LogicalExpression, SortExpression } from "../types";

/**
 * Allows for an array of data to be filtered by a set of expressions.
 */
export class DataFilterService<T> {


    /**
     * Filters an array of items based on a logical expression and optionally sorts the result.
     *
     * @param {LogicalExpression} expression - The logical expression used for filtering.
     * @param {T[]} items - The array of items to be filtered.
     * @return {T[]} The filtered array of items, sorted if specified in the expression.
     */
    public filterData(expression: LogicalExpression, items: T[]) {
        let result = items.filter(x => this.evaluateLogicalExpression(expression, x));
        if (expression.sort)
            result = this.sortData(expression.sort, result);
        return result;
    }

    /**
     * Sorts the given array of items based on the provided sort expression.
     *
     * @param {SortExpression} expression - The sort expression defining the sorting criteria.
     * @param {T[]} items - The array of items to be sorted.
     * @return {T[]} The filtered array of items.
     */
    public sortData(expression: SortExpression, items: T[] ) {
        items.sort((x, y) => this.evaluateSortExpression(expression, x, y));
        return items;
    }
    
    /**
     * Tests if itemValue contains filterValue.
     * @param filterValue The value of the filter.
     * @param itemValue The item to validate against.
     * @returns true if itemValue contains filterValue.
     */
    private contains(filterValue: FilterValue, itemValue: ItemValue) {
        return new RegExp(filterValue + "").test(itemValue + "");
    }

    /**
     * Tests if the itemValue begins with the filterValue.
     * @param filterValue The value of the filter.
     * @param itemValue The value to validate against.
     * @returns true if the itemValue begins with the filterValue.
     */
    private beginsWith(filterValue: FilterValue, itemValue: ItemValue) {
        return new RegExp("^" + filterValue + "").test(itemValue + "");
    }

    /**
 * Tests if the itemValue ends with the filterValue.
 * @param filterValue The value of the filter.
 * @param itemValue The value to validate against.
 * @returns true if the itemValue ends with the filterValue.
 */
    private endsWith(filterValue: FilterValue, itemValue: ItemValue) {
        return new RegExp("" + filterValue + "$").test(itemValue + "");
    }

    /**
* Tests if the itemValue is between two values in filterValue.
* @param filterValue A comma separated string with two values.
* @param itemValue The value to validate against.
* @returns true if the itemValue is between the first and second values in filterValue.
*/
    private between(filterValue: FilterValue, itemValue: ItemValue) {

        let left: boolean = false;
        let right: boolean = false;

        if (typeof filterValue === 'string') {
            const valueArray = filterValue.split(",").map(x => x.trim())
            if (typeof itemValue === "string") {
                left = valueArray[0] <= itemValue;
                right = valueArray[1] >= itemValue;
            }
            if (typeof itemValue === 'number') {
                const numberArray = valueArray.map(x => parseFloat(x));
                left = numberArray[0] <= itemValue;
                right = numberArray[1] >= itemValue;
            }
        }
        return left && right;
    }


    /**
* Tests if the itemValue is in an a set values in filterValue.
* @param filterValue A comma separated string of values.
* @param itemValue The value to validate against.
* @returns true if the itemValue is in the array of value in filterValue.
*/
    private in(filterValue: FilterValue, itemValue: ItemValue) {

        if (typeof filterValue === 'string') {
            const valueArray = filterValue.split(",").map(x => x.trim())

            if (typeof itemValue === "string") {
                //No using indexOf or includes because of the possible different types.
                for (let i = 0; i < valueArray.length; i++) {
                    if (valueArray[i] === itemValue)
                        return true;
                }
            } else if (typeof itemValue === 'number') {
                const numberArray = valueArray.map(x => parseFloat(x));
                for (let i = 0; i < numberArray.length; i++) {
                    if (numberArray[i] === itemValue)
                        return true;
                }

            }
        }

        return false;

    }

    /**
     * 
     * @param expression A {@link FilterExpression} used to filter the data.
     * @param item Item to be test the expression against.
     * @returns true if it passes the filter expression, otherwise false.
     */
    public evaluateExpression(expression: FilterExpression, item: T) {

        const { field, operator: operation, value } = expression;
        //Not sure about this.
        // if (!item.hasOwnProperty(field))
        //     throw new FilterError(`Item ${item} does not have a field ${field}`)
        const itemValue = item[field]
        switch (operation) {
            case ">": return itemValue > value;
            case ">=": return itemValue >= value;
            case "=": return itemValue === value;
            case "<": return itemValue < value;
            case "<=": return itemValue <= value;
            case "!=": return itemValue !== value;
            case "contains": return this.contains(value, itemValue)
            case "beginsWith": return this.beginsWith(value, itemValue)
            case "endsWith": return this.endsWith(value, itemValue)
            case "doesNotContain": return !this.contains(value, itemValue);
            case "doesNotBeginWith": return !this.beginsWith(value, itemValue);
            case "doesNotEndWith": return !this.endsWith(value, itemValue);
            case "null": return itemValue === null || itemValue === undefined;
            case "notNull": return itemValue !== null && itemValue !== undefined;
            case "between": return this.between(value, itemValue)
            case "notBetween": return !this.between(value, itemValue);
            case "in": return this.in(value, itemValue);
            case "notIn": return !this.in(value, itemValue)

        }

    }

    /**
     * 
     * @param expression A {@link LogicalExpression} that defines the filter.
     * @param item Item to be test the expression against
     * @returns returns true if the item passes the expression, otherwise false.
     */
    public evaluateLogicalExpression(expression: LogicalExpression, item: T): boolean {
        const { condition, expressions } = expression;

        let orArray = new Array<boolean>();
        let andArray = new Array<boolean>();

        const isAnd = condition === 'and'

        if (expressions.length === 0)
            throw new FilterError(`Logical Expression contains no filter expressions.`)

        for (let i = 0; i < expressions.length; i++) {
            const element = expressions[i];
            const isQuery = element.hasOwnProperty("condition")
            let result: boolean = false;
            if (isQuery)
                result = this.evaluateLogicalExpression(element as LogicalExpression, item);
            else
                result = this.evaluateExpression(element as FilterExpression, item)
            if (isAnd)
                andArray.push(result)
            else
                orArray.push(result)
        }



        if (isAnd) {
            return andArray.filter(x => !x).length === 0;
        } else {
            return orArray.filter(x => x).length > 0;
        }

    }

    /**
     * Evaluates a sort expression and compares two objects based on the expression.
     *
     * @param {SortExpression} expression - The sort expression to evaluate.
     * @param {T} a - The first object to compare.
     * @param {T} b - The second object to compare.
     * @return {number} The result of the comparison.
     * If a is greater than b, returns a positive number.
     * If a is less than b, returns a negative number.
     * If a and b are equal, returns 0.
     */
    evaluateSortExpression<T extends {}>(expression: SortExpression, a: T, b: T): number {
        let valueA = a[expression.field];
        let valueB = b[expression.field];

        let result = 0;
        if ((valueA === null || valueA === undefined) && (valueB === null || valueB === undefined))
            result = 0;
        else if ((valueA !== null || valueA !== undefined) && (valueB === null || valueB === undefined))
            result  = -1
        else  if ((valueA === null || valueA === undefined) && (valueB !== null || valueB !== undefined))
            result = 1
        else  if ((typeof valueA === 'string') && (typeof valueB === 'string'))
            result = valueA.localeCompare(valueB);
        else  if ((typeof valueA === 'boolean') && (typeof valueB === 'boolean'))
            result = valueA === valueB ? 0 : valueA ? -1 : 1
        else if ((valueA instanceof Date) && (valueB instanceof Date)) 
            result = valueA.getTime() - valueB.getTime();
        else
            result = valueA - valueB

        return expression.direction === 'asc' ? result : -result
    }



}