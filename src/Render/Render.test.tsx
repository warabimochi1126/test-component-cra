import { render, screen } from "@testing-library/react";
import Render from "./Render";

// 学習内容は以下の通り
// 要素がレンダリングされているか
// DOM要素の取得方法
// getBy・getAllByの違い
// getBy・queryByの違い

// jest:
// describe ⇒ テストのタイトル
// it ⇒ テストケースの内容を記載する
// expect(value).matchr() ⇒ valueがmatcherに適合しているか判定する
// react-testing-library:
// render ⇒ コンポーネントを描画する
// screen.debug() ⇒ 引数無し:描画されている物をコンソールに表示する 引数有り:引数のDOM要素をコンソールに表示する
// screen.getByRole() ⇒ アクセシビリティロールでの検索 ⇒ ロール・タグ対応:https://github.com/A11yance/aria-query?tab=readme-ov-file#elements-to-roles
// screen.getAllByRole() ⇒ 適する要素が複数ある場合に配列で要素が返ってくる
// screen.getByText() ⇒ 描画文字列から検索
// getBy~~は無ければエラーをスローする、のでない時を判定したい場合には使用できない
// queryBy~~~は無ければnullを返す
// screen.getByTestId() ⇒ JSX側のdata-testid属性からDOMを取得する
describe("Rendering", () => {
  it("全ての要素がレンダリングされている", () => {
    render(<Render />);
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getByText("Udemy")).toBeTruthy();
    expect(screen.queryByText("tekitou str")).toBeNull();
    expect(screen.getByTestId("copyright")).toBeTruthy();
  });
});
