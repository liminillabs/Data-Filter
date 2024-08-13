

//Need to handle dates when needed.

export type Operators = '=' | '!=' | '<' | '>' | '<=' | '>=' | 'contains' | 'beginsWith' |
    'endsWith' | 'doesNotContain' | 'doesNotBeginWith' | 'doesNotEndWith' | 'null' |
    'notNull' | 'in' | 'notIn' | 'between' | 'notBetween'

export type Conditions  = 'and' | 'or'

export type SortDirection = 'asc' | 'desc'

export type FilterValue = string | number |  boolean 

export type ItemValue = string | number | boolean

/**
 * Defines the logic for a single filter expression.
 */
export interface FilterExpression {
    /** ID Field */
    id: number | string;
    /**
     * Field of the item to test.
     */
    field: string;
    /**
     * Validation operator
     */
    operator: Operators;
    /**
     * Value to test against.
     */
    value: FilterValue;
}

/**
 * Defines the logic for a set of filters.
 */
export type LogicalExpression = {
    /**
     * Defines how the expressions are validated as a set.
     */
    condition: Conditions;
    /**
     * A set of expressions, either {@link LogicalExpression} or {@link FilterExpression}
     */
    expressions: Expression[]
    /**
     * Defines how to sort the data once the filter is completed.
     */
    sort?: SortExpression
}

/**
 * Allows both expression to be passed in a single type.
 */
export type Expression = FilterExpression | LogicalExpression

export interface SortExpression  {
    field: string;
    direction: SortDirection;
}