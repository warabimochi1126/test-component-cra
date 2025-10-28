import { render, screen } from "@testing-library/react";
import UseEffectRender from "./UseEffectRender";

// react-testing-library:
// findBy~~は非同期の結果が反映されるまでDOM要素の取得を待つ
describe("useEffect Rendering", () => {
  it("正常に非同期実行後のコンポーネントが描画される", async () => {
    render(<UseEffectRender />);
    expect(screen.queryByText(/I am/)).toBeNull();
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
