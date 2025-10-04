// src/api/checkout.js

// Mock Checkout API (frontend only)
export async function checkout(order) {
  // Log order details to console
  console.log("=== NEW ORDER ===");
  console.log("Order Details:");
  console.log(JSON.stringify(order, null, 2));
  console.log("Items:");
  order.items.forEach((item) => {
    console.log(
      `  - ${item.name} x${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`
    );
  });
  console.log(`Total: ₹${order.total.toFixed(2)}`);
  console.log("================");

  // Generate order ID
  const orderId = `ORD-${Date.now()}`;

  // Return a mock response (imitates server response)
  return {
    success: true,
    message: "Order placed successfully",
    orderId,
  };
}
