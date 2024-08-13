import { DataFilterService } from "../../services";
import { SortExpression } from "../../types";


describe('DataFilterService', () => {
  let service: DataFilterService<any>;

  beforeEach(() => {
    service = new DataFilterService();
  });

  describe('sortData', () => {
    it('should sort the array in ascending order by default', () => {
      const items = [{ id: 3 }, { id: 1 }, { id: 2 }];
      const expression: SortExpression = { field: 'id', direction: 'asc' };

      const sortedItems = service.sortData(expression, items);

      expect(sortedItems).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });

    it('should sort the array in descending order when direction is desc', () => {
      const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const expression: SortExpression = { field: 'id', direction: 'desc' };

      const sortedItems = service.sortData(expression, items);

      expect(sortedItems).toEqual([{ id: 3 }, { id: 2 }, { id: 1 }]);
    });

    it('should handle null and undefined values', () => {
      const items = [{ id: null }, { id: undefined }, { id: 1 }, { id: 2 }];
      const expression: SortExpression = { field: 'id', direction: 'asc' };

      const sortedItems = service.sortData(expression, items);

      expect(sortedItems).toEqual([{ id: 1 }, { id: 2 }, { id: null }, { id: undefined } ]);
    });

    it('should handle string values', () => {
      const items = [{ id: 'c' }, { id: 'a' }, { id: 'b' }];
      const expression: SortExpression = { field: 'id', direction: 'asc' };

      const sortedItems = service.sortData(expression, items);

      expect(sortedItems).toEqual([{ id: 'a' }, { id: 'b' }, { id: 'c' }]);
    });

    it('should handle date values', () => {
      const items = [{ id: new Date('2022-01-01') }, { id: new Date('2022-01-02') }, { id: new Date('2022-01-03') }];
      const expression: SortExpression = { field: 'id', direction: 'asc' };

      const sortedItems = service.sortData(expression, items);

      expect(sortedItems).toEqual([
        { id: new Date('2022-01-01') },
        { id: new Date('2022-01-02') },
        { id: new Date('2022-01-03') },
      ]);
    });

    it('should handle numeric values', () => {
      const items = [{ id: 3 }, { id: 1 }, { id: 2 }];
      const expression: SortExpression = { field: 'id', direction: 'asc' };

      const sortedItems = service.sortData(expression, items);

      expect(sortedItems).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });

    it('should handle boolean values', () => {
        const items = [{ id: true }, { id: false }, { id: true }];
        const expression: SortExpression = { field: 'id', direction: 'asc' };
  
        const sortedItems = service.sortData(expression, items);
  
        expect(sortedItems).toEqual([{ id: true }, { id: true }, { id: false }]);
      });
  });
});