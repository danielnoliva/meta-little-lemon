import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";

test("renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByRole("heading", { name: /book now/i });
  expect(headingElement).toBeInTheDocument();
});

function renderBookingForm(overrides = {}) {
  const props = {
    availableTimes: ["17:00", "17:30"],
    dispatch: jest.fn(),
    onSubmit: jest.fn().mockResolvedValue(true),
    ...overrides,
  };
  render(<BookingForm {...props} />);
  return props;
}

test("applies HTML5 validation attributes to booking fields", () => {
  renderBookingForm();
  const today = new Date().toISOString().split("T")[0];

  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("min", today);
  expect(dateInput).toBeRequired();

  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toHaveAttribute("required");

  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "12");
  expect(guestsInput).toBeRequired();

  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toHaveAttribute("required");
});

test("shows error when selecting a past date", async () => {
  renderBookingForm();
  const dateInput = screen.getByLabelText(/choose date/i);
  const past = new Date();
  past.setDate(past.getDate() - 1);
  const pastValue = past.toISOString().split("T")[0];

  fireEvent.change(dateInput, { target: { value: pastValue } });
  fireEvent.blur(dateInput);

  expect(
    await screen.findByText(/date cannot be in the past/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /submit reservation/i })
  ).toBeDisabled();
});

test("shows error when guest count is below minimum", async () => {
  renderBookingForm();
  const guestsInput = screen.getByLabelText(/number of guests/i);
  fireEvent.change(guestsInput, { target: { value: "0" } });
  fireEvent.blur(guestsInput);

  expect(
    await screen.findByText(/at least one guest is required/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /submit reservation/i })
  ).toBeDisabled();
});

test("enables submission when form values are valid", async () => {
  const onSubmit = jest.fn().mockResolvedValue(true);
  renderBookingForm({ onSubmit });

  const timeSelect = screen.getByLabelText(/choose time/i);
  await waitFor(() => expect(timeSelect).toHaveValue("17:00"));

  const submitButton = screen.getByRole("button", {
    name: /submit reservation/i,
  });
  expect(submitButton).not.toBeDisabled();

  await userEvent.click(submitButton);
  await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
});
