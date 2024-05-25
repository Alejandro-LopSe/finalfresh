export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type Carrito_prodcut = {
  product: Product;
  quantity: number;
};

export type Cookie_type = {
  user: string;
  token: string;
  cart?: Carrito_prodcut[];
};
