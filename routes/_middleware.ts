import { FreshContext } from "$fresh/server.ts";
import { get_cookie } from "../cookie_functions.ts";
import jwt from "jsonwebtoken";
export async function handler(req: Request, ctx: FreshContext) {
  const cookie = get_cookie(req.headers);
  if (!cookie) {
    const headers = new Headers({
      location: "/login",
    });
    return new Response(null, {
      status: 302,
      headers,
    });
  }
  console.log(" POST :      ", cookie.token);

  const payload = jwt.verify(cookie.token, "JWT_SECRET");
  console.log("PAYLOAD:    ", payload);

  if (!payload) {
    const headers = new Headers({
      location: "/login",
    });
    return new Response(null, {
      status: 302,
      headers,
    });
  }
  const resp = await ctx.next();
  return resp;
}
