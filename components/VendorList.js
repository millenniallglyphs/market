import { useState } from "react";

function ProductsPage({ vendors }) {
  return (
    <div className="container mx-auto px-6">
      <h3 className="text-gray-700 text-2xl font-medium">All Vendors</h3>
      <span className="mt-3 text-sm text-gray-500">Test</span>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {vendors.map((vendor) => (
          <div key={vendor._id} {...vendor}>
              <p>
                Hello World!
              </p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
