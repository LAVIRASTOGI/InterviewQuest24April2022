import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { BrowserRouter } from "react-router-dom";

const FooterWrapperComponent = ({ numberOfIncomepleteTask }) => {
  return (
    <BrowserRouter>
      <Footer numberOfIncomepleteTask={numberOfIncomepleteTask} />
    </BrowserRouter>
  );
};
describe("Footer", () => {
  it("should render same text passed into title prop", () => {
    //    1. render the component we want to test
    render(<FooterWrapperComponent numberOfIncomepleteTask="5" />);
    //2.Find elements We want to interact with
    const footerComponent = screen.getByText(/5 Tasks left/i);

    //3. interact with those elements

    //4 Assets That the Results are expected.
    expect(footerComponent).toBeInTheDocument();
  });
});

//some assertions

// it('p element should be truthy when the number of incomplete tasks is one', () => {
//   render(
//       <MockTodoFooter
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toBeTruthy();
// });

// it('"task" should be visible when the number of incomplete tasks is one', () => {
//   render(
//       <MockTodoFooter
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
// visible in UI or not if u give opacity or display none this testcse will be false
//   expect(pElement).toBeVisible();
// });

// it('should contain p tag with correct text', () => {
//   render(
//       <MockTodoFooter
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toContainHTML('p');
// });

// it('should render correct text content', () => {
//   render(
//       <MockTodoFooter
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toHaveTextContent("1 task left");
// });

// it('should render correct text content', () => {
//   render(
//       <MockTodoFooter
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).not.toBeFalsy();
// });

// it('should render correct text content', () => {
//   render(
//       <MockTodoFooter
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement.textContent).toBe("1 task left");
// });
