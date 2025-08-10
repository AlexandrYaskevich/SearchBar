
const SearchBar = ({ showStock, stoc, searhResult, valueSearch }) => {
  return (
    <form className="search">
      <label>
        <input
          className="inputSearch"
          type="text"
          placeholder="Search..."
          onChange={(e) => searhResult(e.target.value)}
          value={valueSearch}
        />
      </label>
      <label>
        <input onChange={showStock} type="checkbox" checked={stoc} />
        Only Show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
