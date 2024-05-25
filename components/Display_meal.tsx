import { FunctionComponent } from "preact";
import { Product } from "../types.ts";
import { AddProduct } from "../islands/AddProduct.tsx";

export const Display_meal: FunctionComponent<
  { data: Product[]; meal: string }
> = (
  { data },
) => {
  return (
    <div class={"products"}>
      <h1>Products</h1>
      <>
        {data && data.map((elem: Product) => {
          return (
            <div class={"item"} key={elem.id}>
              <span class={"name"}>{elem.name}</span>
              <span
                class={"price"}
              >
                {elem.price}
              </span>
              <img src={elem.image}></img>
              <span class={"description"}>{elem.description}</span>
              <AddProduct product={elem}>+</AddProduct>
            </div>
          );
        })}
      </>
    </div>
  );
};
