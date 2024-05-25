import { Handlers } from "$fresh/server.ts";
import { get_cookie } from "../cookie_functions.ts";
import jwt from "jsonwebtoken";
export const handler: Handlers = {
  GET: (req: Request) => {
    const headers = new Headers({
      location: "/products/breakfast",
    });
    return new Response(null, {
      status: 302,
      headers,
    });
  },
};
