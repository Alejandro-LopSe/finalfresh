import { FunctionComponent } from "preact";
import { Product } from "../types.ts";
import { Cartnumb } from "../islands/Cartnum.tsx";

export const Menu: FunctionComponent = () => {
  return (
    <div class={"menu"}>
      <a href={"/products/breakfast"}>Breakfast</a>
      <a href={"/products/lunch"}>Lunch</a>
      <a href={"/cart"}>
        Shoppingcart<Cartnumb />
      </a>
    </div>
  );
};
