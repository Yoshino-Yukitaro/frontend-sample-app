import { Form } from "@remix-run/react";
import { SimpleButton } from "~/ui";

const MypageRoute = () => {
  return (
    <div>
      <h1>My Page</h1>
      <Form action="/logout" method="post">
        <SimpleButton type="submit">ログアウト</SimpleButton>
      </Form>
    </div>
  );
}

export default MypageRoute;
