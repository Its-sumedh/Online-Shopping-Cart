// src/components/cart-modal.jsx
import { useState } from "react";
import { useCart } from "../context/cart-context";
import { checkout } from "../api/checkout";

export default function CartModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { cartItems, cartCount, subtotal, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleCheckout = async () => {
    setIsCheckingOut(true);

    const orderData = {
      items: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        name: item.name,
        price: item.price,
      })),
      total: subtotal,
    };

    try {
      const data = await checkout(orderData);

      if (data.success) {
        alert(`Order placed! Order ID: ${data.orderId}`);
        clearCart();
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Checkout failed");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Cart ({cartCount})
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded max-w-2xl w-full max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold">Cart</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500">
                ✕
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 py-8">Cart is empty</p>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3 border p-3 rounded">
                      <img
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="font-bold">₹{item.price.toFixed(2)}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="bg-gray-200 px-2 py-1 rounded"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="bg-gray-200 px-2 py-1 rounded"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t p-4">
                <div className="flex justify-between text-lg font-bold mb-3">
                  <span>Total:</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  {isCheckingOut ? "Processing..." : "Checkout"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
