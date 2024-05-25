import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { set_cookie } from "../cookie_functions.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    const form = await req.formData();
    const user = form.getAll("user").toString();
    const pas = form.getAll("pass").toString();
    const headers = set_cookie(user, pas);

    headers.append("location", "/products/breakfast");
    return new Response(null, {
      status: 302,
      headers,
    });
  },
};

export default function Page(props: PageProps) {
  return (
    <form action="/login" method={"post"}>
      <input type="text" name={"user"} id="user" />
      <input type="text" name={"pass"} id="pass" />
      <button type={"submit"}>Log In</button>
    </form>
  );
}
