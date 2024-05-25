import { FunctionComponent } from "preact";
import { Carrito_prodcut, Product } from "../types.ts";
import { AddProduct } from "../islands/AddProduct.tsx";
import { SubProduct } from "../islands/SubProduct.tsx";

export const Carrito: FunctionComponent<
  { data: Carrito_prodcut[]; price: number }
> = (
  { data, price },
) => {
  console.log(data);

  return (
    <div class={"products"}>
      <h1>Cart</h1>
      {data && data.map((elem: Carrito_prodcut) => {
        return (
          <div class={"item"} key={elem.product.id}>
            <span class={"name"}>{elem.product.name}</span>
            <span class={"price"}>{elem.product.price}</span>
            <img src={elem.product.image}></img>
            <span class={"description"}>{elem.product.description}</span>
            <SubProduct product={elem.product}>-</SubProduct>
            <AddProduct product={elem.product}>+</AddProduct>
          </div>
        );
      })}
      <div class={"total"}>
        <div class={"total-text"}>Total:</div>
        <div class={"total-price"}>{price}€</div>
      </div>
    </div>
  );
};
