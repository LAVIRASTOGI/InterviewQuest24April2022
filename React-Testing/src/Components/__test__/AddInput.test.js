import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockFn = jest.fn();

describe("Input", () => {
  it("should render input", () => {
    //    1. render the component we want to test
    render(<AddInput todos={[]} setTodos={mockFn}></AddInput>);
    //2.Find elements We want to interact with
    const inputComponent = screen.getByPlaceholderText(
      /Add a new task here.../i
    );

    //3. interact with those elements

    //4 Assets That the Results are expected.
    expect(inputComponent).toBeInTheDocument();
  });

  it("should render input and do onchange ", () => {
    //    1. render the component we want to test
    render(<AddInput todos={[]} setTodos={mockFn}></AddInput>);
    //2.Find elements We want to interact with
    const inputComponent = screen.getByPlaceholderText(
      /Add a new task here.../i
    );

    //3. interact with those elements
    fireEvent.change(inputComponent, { target: { value: "go Shopping" } });

    //4 Assets That the Results are expected.
    expect(inputComponent.value).toBe("go Shopping");
  });

  it("should render input as empty on clicking on add ", () => {
    //    1. render the component we want to test
    render(<AddInput todos={[]} setTodos={mockFn}></AddInput>);
    //2.Find elements We want to interact with
    const inputComponent = screen.getByPlaceholderText(
      /Add a new task here.../i
    );
    const BtnComponent = screen.getByRole('button',{name:/ADD/i})

    //3. interact with those elements
    fireEvent.change(inputComponent, { target: { value: "go Shopping" } });
    fireEvent.click(BtnComponent)

    //4 Assets That the Results are expected.
    expect(inputComponent.value).toBe("");
  });
});
