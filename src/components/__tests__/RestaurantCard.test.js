import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import Mock_Data from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe("TestCases for Restaurant Cart", () => {
  it("For Res Name", () => {
    render(<RestaurantCard resData={Mock_Data} />);
    const resName = screen.getByText(
      "Kwality Walls Frozen Dessert and Ice Cream Shop"
    );
    expect(resName).toBeInTheDocument();
  });
});
