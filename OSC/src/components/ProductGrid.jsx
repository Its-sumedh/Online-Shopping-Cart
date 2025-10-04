// src/components/ProductGrid.jsx
import { useCart } from "../context/cart-context";

export default function ProductGrid({ products }) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded border">
          <img
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-40 object-cover mb-3"
          />
          <h3 className="font-semibold mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-3">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">₹{product.price.toFixed(2)}</span>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
