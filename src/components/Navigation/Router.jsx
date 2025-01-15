import Home from "../../screens/Home";
import FilterableProductTable from "../../screens/FilterableProductTable";

import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="products" element={<FilterableProductTable />} />
    </Routes>
  );
};

export default Router;
