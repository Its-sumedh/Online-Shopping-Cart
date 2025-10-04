import { useEffect, useState } from "react";
import CartModal from "../Components/CartModel";
import ProductGrid from './../Components/ProductGrid';
import { getProducts } from "../api/product";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : (
          <ProductGrid products={products} />
        )}

        <CartModal />
      </div>
    </main>
  );
}
