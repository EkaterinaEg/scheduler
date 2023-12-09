import { renderHook } from "@testing-library/react-hooks";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<Button />);
});
it("renders its `children` prop as text", () => {
  const { getByText } = render(<Button>Default</Button>);
  expect(getByText("Default")).toBeInTheDocument();
});
