import React from "react";
import { Outlet } from "react-router-dom";

export default function ShopLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
