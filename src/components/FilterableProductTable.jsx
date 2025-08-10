import SearchBar from "./SearchBar";
import ProductTable from "./ProductCategoryRow";
import { useState } from "react";

const FilterableProductTable = (products) => {
  const [stoc, setStoc] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  function showStock() {
    setStoc(!stoc);
  }

  function searhResult(value) {
    setValueSearch(value);
  }

  return (
    <>
      <div className="all">
        <SearchBar
          showStock={showStock}
          stoc={stoc}
          searhResult={searhResult}
          valueSearch={valueSearch}
        />
        <ProductTable
          products={products}
          stoc={stoc}
          valueSearch={valueSearch}
        />
      </div>
    </>
  );
};

export default FilterableProductTable;