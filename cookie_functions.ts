import jwt from "jsonwebtoken";
import { Carrito_prodcut, Cookie_type } from "./types.ts";

export const set_cookie = (user: string, token: string) => {
  const headers = new Headers();
  const t = jwt.sign({ pass: token, user: user }, "JWT_SECRET");
  console.log("JWT:     ", t);

  headers.append("Set-Cookie", `user=${user}`);
  headers.append("Set-Cookie", `token=${t}`);
  return headers;
};

export const get_cookie = (headers: Headers): Cookie_type | undefined => {
  const cookie_raw = headers.get("cookie");
  if (!cookie_raw) {
    return;
  }
  const cookie = type_cookie(cookie_raw!);

  return cookie;
};

export const type_cookie = (cookie_raw: string) => {
  const split = cookie_raw.split("; ");
  const cookie_typed: Cookie_type = {
    user: split[0].substring(5),
    token: split[1].substring(6),
  };
  return cookie_typed;
};
