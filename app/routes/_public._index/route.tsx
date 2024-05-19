import { ActionFunctionArgs } from "@remix-run/node"
import { authenticator } from "~/server/auth"

// actionはURLに紐付けないと共通化が出来なさそう
export const action = async({ request }: ActionFunctionArgs) => {
  return await authenticator.authenticate("user-login", request, {
    successRedirect: "/todos",
    failureRedirect: "/"
  })
}

const Home = () => {
  return (<div>Home</div>)
}

export default Home
