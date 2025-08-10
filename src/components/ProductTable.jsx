import ProductCategoryRow from "./ProductCategoryRow";

export default ProductTable = ({ products, stoc, valueSearch }) => {
  return (
    <div className="table">
      <label className="labelcolumn">
        <h1>Name</h1>
        <h1>Price</h1>
      </label>
      <ProductCategoryRow
        products={products}
        stoc={stoc}
        valueSearch={valueSearch}
      />
    </div>
  );
};
