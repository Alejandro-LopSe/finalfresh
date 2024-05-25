import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Carrito } from "../components/Carrito.tsx";

import { Carrito_prodcut, Product } from "../types.ts";

export const handler: Handlers<{ product: Carrito_prodcut[]; price: number }> =
  {
    GET(
      req: Request,
      ctx: FreshContext<unknown, { product: Carrito_prodcut[]; price: number }>,
    ) {
      try {
        const cookie = req.headers.get("cookie");
        if (!cookie) {
          return ctx.render();
        }
        const cookie_arr = cookie.substring(5).split(";");
        const arr_parsed: Carrito_prodcut[] = JSON.parse(cookie_arr[0]);
        const vvv: Carrito_prodcut[] = [];
        let sum = 0;
        const exist = arr_parsed.forEach((elem: Carrito_prodcut) => {
          sum = sum + (elem.product.price * elem.quantity);
        });

        return ctx.render({ product: arr_parsed, price: sum });
      } catch (error) {
        console.log(error);

        return ctx.render();
      }
    },
  };

export default function Page(
  props: PageProps<{ product: Carrito_prodcut[]; price: number }>,
) {
  return <Carrito data={props.data.product} price={props.data.price} />;
}
