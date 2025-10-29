import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";
import { setupServer } from "msw/node";
import MockServer from "./MockServer";

// msw:
// テスト環境下からのHTTPリクエストを上書きしてモックレスポンスを返す仕組み
// setupServer() ⇒ モックレスポンスを返すサーバの定義
// server.listen() ⇒ モックサーバの起動
// server.resetHandlers() ⇒
// server.close() ⇒
const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "Bred dummy" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
// afterAll(() => server.close());

// describe("Mocking API", () => {
//   it("fetchが成功した時、成功時データが画面に描画され、ボタンが非活性化される", async () => {
//     render(<MockServer />);
//     userEvent.click(screen.getByRole("button"));
//     expect(await screen.findByRole("heading")).toHaveTextContent("Bred dummy");
//     expect(screen.getByRole("button")).toHaveAttribute("disabled");
//   });
//   it("fetchが失敗した時、エラーメッセージが画面に描画され、ボタンが活性化されている", async () => {
//     server.use(
//       rest.get(
//         "https://jsonplaceholder.typicode.com/users/1",
//         (req, res, ctx) => {
//           return res(ctx.status(404));
//         }
//       )
//     );
//     render(<MockServer />);
//     userEvent.click(screen.getByRole("button"));
//     expect(await screen.findByRole("error")).toHaveTextContent(
//       "Fetching Failed !"
//     );
//     expect(screen.queryByRole("heading")).toBeNull();
//     expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
//   });
// });

describe("mock API 調査", () => {
  it("調査", async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    console.log(await response.json());
  });
});
