// src/api/products.js
export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    description: "Premium noise-canceling headphones",
    imageUrl: "/wireless-headphones.png",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    description: "Fitness tracker with heart rate monitor",
    imageUrl: "/smartwatch-lifestyle.png",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    description: "Ergonomic aluminum stand",
    imageUrl: "/laptop-stand.png",
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 34.99,
    description: "Ergonomic wireless mouse",
    imageUrl: "/wireless-mouse.png",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 59.99,
    description: "7-in-1 USB-C hub with HDMI",
    imageUrl: "/usb-c-hub.png",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 129.99,
    description: "RGB backlit mechanical keyboard",
    imageUrl: "/mechanical-keyboard.png",
  },
  {
    id: 7,
    name: "HD Webcam",
    price: 89.99,
    description: "1080p webcam with auto-focus",
    imageUrl: "/hd-webcam.jpg",
  },
  {
    id: 8,
    name: "Phone Stand",
    price: 19.99,
    description: "Adjustable phone stand",
    imageUrl: "/phone-stand.jpg",
  },
];

// Mock API function (imitates GET request)
export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products); 
    }, 500);
  });
}
