import { FunctionComponent } from "preact";
import { Carrito_prodcut, Product } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { cartNumber } from "../signals/cuantity.ts";

export const SubProduct: FunctionComponent<{ product: Product }> = (
  { product },
) => {
  JSON.stringify({ producto: product, quantity: 1 });
  const add = (product: Product) => {
    const cookie = document.cookie.split(";");

    const cart = cookie.find((elem: string) => {
      if (elem.startsWith("cart=")) {
        return true;
      }
      return false;
    });
    if (!cart) {
      document.cookie = `cart=${
        JSON.stringify([{ product: product, quantity: 1 }])
      }; Path=/`;
      return;
    } else {
      const cookie_arr = document.cookie.substring(5).split(";");
      const arr_parsed: Carrito_prodcut[] = JSON.parse(cookie_arr[0]);
      const vvv: Carrito_prodcut[] = [];
      let e = false;
      const exist = arr_parsed.forEach((elem: Carrito_prodcut) => {
        console.log(elem);

        if (elem.product.name === product.name) {
          e = true;
          if (elem.quantity > 1) {
            const act_elem: Carrito_prodcut = {
              product: elem.product,
              quantity: (elem.quantity - 1),
            };
            vvv.push(act_elem);
            return true;
          } else {
            return true;
          }
        } else {
          vvv.push(elem);
          return false;
        }
      });

      document.cookie = `cart=${JSON.stringify(vvv)}; Path=/`;
    }
  };
  return (
    <span
      class="remove"
      onClick={(e) => {
        add(product);
        cartNumber.value = cartNumber.value - 1;
      }}
    >
      -
    </span>
  );
};
