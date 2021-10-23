import { render, screen } from "@testing-library/react";
import Todo from "../Todo";

describe("tests for todo component", () => {
  let getByTestId;
  beforeEach(() => {
    const component = render(<Todo />);
    getByTestId = component.getByTestId;
  });

  it("correct todo component header must be present", () => {
    const header = getByTestId("header");

    expect(header.textContent).toBe("Todo App");
  });

  it("add button should have correct text", () => {
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
  });

  it("delete button should have correct text", () => {
    const deleteBtn = getByTestId("delete-btn");

    expect(deleteBtn.textContent).toBe("Delete");
  });
});
