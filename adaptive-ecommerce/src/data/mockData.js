import products from "./products";

const featuredProducts = products.slice(0, 5);

const recentProducts = [
  products[0],
  products[1],
  products[4],
];

const wishlist = [
  products[2],
  products[6],
  products[7],
];

const orders = [
  {
    id: "ORD-1001",
    date: "12 Sep 2026",
    status: "Delivered",
    total: 4999,
    items: [
      {
        productId: 1,
        quantity: 1,
      },
    ],
  },
  {
    id: "ORD-1002",
    date: "08 Sep 2026",
    status: "Shipped",
    total: 1499,
    items: [
      {
        productId: 2,
        quantity: 1,
      },
    ],
  },
];

const mockData = {
  featuredProducts,
  recentProducts,
  wishlist,
  orders,
};

export {
  featuredProducts,
  recentProducts,
  wishlist,
  orders,
};

export default mockData;