import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("Should load contact us component", () => {
  const heading = render(<Contact />);

  screen.getByRole(heading);

  expect(heading).toBeInTheDocument();
});
