import type {
  ActionFunctionArgs
} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "~/server/auth"; 

export const action = async ({ request }: ActionFunctionArgs) => {
  return await authenticator.logout(request, { redirectTo: "/" });
};

export const loader = async () => {
  return redirect("/todos");
};