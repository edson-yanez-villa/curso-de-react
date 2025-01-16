import Home from "../../screens/Home";
import FilterableProductTable from "../../screens/FilterableProductTable";
import Login from "../../screens/Login";

import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="products" element={<FilterableProductTable />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default Router;
