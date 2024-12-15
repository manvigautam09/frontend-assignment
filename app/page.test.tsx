import { render, screen } from "@testing-library/react";
import Page from "./page";

test("fetches and displays data", async () => {
  render(<Page />);
  const rows = await screen.findAllByRole("row");
  expect(rows).toHaveLength(14); // Adjust based on expected data length
});
