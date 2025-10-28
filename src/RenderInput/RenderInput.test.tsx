import { render, screen } from "@testing-library/react";
import RenderInput from "./RenderInput";
import userEvent from "@testing-library/user-event";

// 学習内容は以下の通り
// インタラクティブな動作をテスト上で行う
// 関数をモックする

// react-testing-library:
// screen.getByPlaceHolderText() ⇒ placeholderの文字列でDOM要素を特定
// userEvent.type() ⇒ 要素に文字列を入力する
// userEvent.click() ⇒ 要素をクリックする
// jest:
// jest.fn() ⇒ モック関数、呼ばれたか・呼ばれた回数・どんな引数で呼ばれたか等を記録している
// expect().toBe() ⇒ 値が一致するか確認する
// expect().toHaveBeenCalled() ⇒ 一回以上モック関数が呼ばれた
// expect().not.matcher() ⇒ matcher()の反対を指す
// expect().toHaveBeenCalledTimes(n) ⇒ n回モック関数が呼ばれた
describe("Rendering", () => {
  it("全ての要素がレンダリングされている", () => {
    render(<RenderInput outputConsole={() => {}} />);
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
});

describe("入力時にonChangeが発火する", () => {
  it("正常に入力値が取得出来る", () => {
    render(<RenderInput outputConsole={() => {}} />);
    const inputValue = screen.getByPlaceholderText<HTMLInputElement>("Enter");
    userEvent.type(inputValue, "test");
    expect(inputValue.value).toBe("test");
  });
});

describe("ボタン押下時", () => {
  it("外部の関数が実行されない", () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    userEvent.click(screen.getByRole("button"));
    expect(outputConsole).not.toHaveBeenCalled();
  });
  it("外部の関数が実行される", () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText<HTMLInputElement>("Enter");
    userEvent.type(inputValue, "test");
    userEvent.click(screen.getByRole("button"));
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
