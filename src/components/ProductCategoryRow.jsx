
const ProductCategoryRow = ({ products, stoc, valueSearch }) => {
  const allProducts = products.products;
  console.log(allProducts)
  const allCategory = allProducts
    .map((p) => p.category)
    .filter((category, index, allc) => allc.indexOf(category) === index);
  let filteredProducts = allProducts;

  if (stoc) {
    filteredProducts = filteredProducts.filter((p) => p.stocked === true);
  }

  if (typeof valueSearch === "string" && valueSearch.trim() !== "") {
    const searchLower = valueSearch.toLowerCase();
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(searchLower)
    );
  }

  return (
    <div>
      <ul>
        {allCategory.map((category) => (
          <li key={category}>
            {category}
            <ul className="category">
              {filteredProducts
                .filter((p) => p.category === category)
                .map((p) => (
                  <li key={p.name} className={p.stocked ? "product" : "stock"}>
                    <p>{p.name}</p>
                    <p className="price">{p.price}</p>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategoryRow;

