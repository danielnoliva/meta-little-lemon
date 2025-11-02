import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders Little Lemon homepage content", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(
    screen.getByRole("heading", { name: /little lemon/i })
  ).toBeInTheDocument();
});
