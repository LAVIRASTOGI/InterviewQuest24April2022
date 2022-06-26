import { render, screen, fireEvent } from "@testing-library/react";
import Todo from '../Todo'
import { BrowserRouter } from "react-router-dom";


const BrowserWrapper=()=>{
    return(
        <BrowserRouter>
      <Todo></Todo>
    </BrowserRouter>
    )
}

describe("Todo", () => {
 
  it("should render input what we add after onchange and add ", () => {
    //    1. render the component we want to test
    render(<BrowserWrapper></BrowserWrapper>);
    //2.Find elements We want to interact with
    const inputComponent = screen.getByPlaceholderText(
      /Add a new task here.../i
    );
    const BtnComponent = screen.getByRole('button',{name:/ADD/i})

    //3. interact with those elements
    fireEvent.change(inputComponent, { target: { value: "go Shopping" } });
    fireEvent.click(BtnComponent);

    //find div ellement---

    const divElememt=screen.getByText(/go Shopping/i)

    //4 Assets That the Results are expected.
   // expect(divElememt).toBeInTheDocument();

   
   //for classnames -- haveclass is used
   expect(divElememt).not.toHaveClass('todo-item-active')
  });
  it("should give length how many we add after onchange and add ", () => {
    //    1. render the component we want to test
    render(<BrowserWrapper></BrowserWrapper>);
    //2.Find elements We want to interact with
    const inputComponent = screen.getByPlaceholderText(
      /Add a new task here.../i
    );
    const BtnComponent = screen.getByRole('button',{name:/ADD/i})

    //3. interact with those elements
    fireEvent.change(inputComponent, { target: { value: "go Shopping" } });
    fireEvent.click(BtnComponent);

    fireEvent.change(inputComponent, { target: { value: "go Shopping 2" } });
    fireEvent.click(BtnComponent);

    //find div ellement---

    const divElememt=screen.getAllByTestId('text-container')

    //4 Assets That the Results are expected.
    expect(divElememt.length).toBe(2);
  });
});
