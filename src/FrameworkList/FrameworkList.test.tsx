import { render, screen } from "@testing-library/react";
import FrameWorkList from "./FrameworkList";

// jest matcher:
// toBeInTheDocument() ⇒ 要素がレンダリングされたコンポーネントの中に存在するか確かめる
// toEqual() ⇒ 実測値と期待値が一致すか確かめる
describe("propsの値がリストとして描画される", () => {
  it("propsが渡されなかった時、No data !が描画される", () => {
    render(<FrameWorkList />);
    expect(screen.getByText("No data !")).toBeInTheDocument();
  });
  it("正常にリストアイテムが描画される", () => {
    const dummyData = [
      {
        id: 1,
        item: "React dummy",
      },
      {
        id: 2,
        item: "Angular dummy",
      },
      {
        id: 3,
        item: "Vue dummy",
      },
    ];
    render(<FrameWorkList frameworks={dummyData} />);
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((element) => element.textContent);
    const dummyItems = dummyData.map((element) => element.item);
    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByText("No data !")).toBeNull();
  });
});
