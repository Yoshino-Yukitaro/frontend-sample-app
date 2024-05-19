import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session";
import { FormStrategy } from "remix-auth-form";
import { login } from "./login";

export const authenticator = new Authenticator<number>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const username = form.get("username");
    const password = form.get("password");
    const userId = await login(String(username), String(password));
    return userId;
  }),
  "user-login"
);
