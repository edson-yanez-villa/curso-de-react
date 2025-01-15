import SearchBar from "../components/FilterableProductTable/SearchBar";
import ProductTable from "../components/FilterableProductTable/ProductTable";

import { useSelector } from "react-redux";

const FilterableProductTable = () => {
  const products = useSelector((state) => state.products.dataProduct);
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

export default FilterableProductTable;
