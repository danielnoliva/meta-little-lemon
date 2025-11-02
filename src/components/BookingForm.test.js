import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByRole("heading", { name: /book now/i });
  expect(headingElement).toBeInTheDocument();
});
