export function SideBarFilter({
  sortBy,
  onSortChange,
  onFilterChange,
  filterBy,
}) {
  return (
    <div className="side-bar-filter">
      <label>Filter</label>

      <select
        className="filter"
        value={filterBy}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="men's clothing">Men's</option>
        <option value="women's clothing">Women's</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="furniture">Furniture</option>
      </select>

      <label>Sort</label>

      <select
        className="sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="popular">Most Popular</option>
        <option value="low">Price:Low-High</option>
        <option value="high">Price:High-Low</option>
      </select>
    </div>
  );
}
