export type cartType = {
  product: {
    cart: String;
  };
};

export type wishlistType = {
  product: {
    wishlist: String;
  };
};

export type productType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: string;
};
