import * as fromFilter from './filter.actions';

describe('loadFilters', () => {
  it('should return an action', () => {
    expect(fromFilter.updateSearchFilter({ searchValue: 'string'}).type).toBe('[Filter] Load Filters');
  });
});
