import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Display_meal } from "../../components/Display_meal.tsx";
import { Product } from "../../types.ts";

export const handler: Handlers<Product[]> = {
  async GET(req: Request, ctx: FreshContext<unknown, Product[]>) {
    try {
      const meal = ctx.params.meal;
      const response = await fetch(
        `https://shop-products.deno.dev/products/${meal}`,
      );
      const data: Product[] = await response.json();
      return ctx.render(data);
    } catch (error) {
      return ctx.render();
    }
  },
};

export default function Page(props: PageProps<Product[]>) {
  return <Display_meal data={props.data} meal={props.params.meal} />;
}
