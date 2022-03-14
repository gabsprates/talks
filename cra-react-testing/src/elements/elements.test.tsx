import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

describe.skip("Element: input", () => {
  it("should show typing steps", () => {
    document.body.innerHTML = "<input />";

    const input = screen.getByRole("textbox");
    input.addEventListener("keydown", (e) =>
      console.log("keydown: ", e.target.value)
    );
    input.addEventListener("keypress", (e) =>
      console.log("keypress: ", e.target.value)
    );
    input.addEventListener("keyup", (e) =>
      console.log("keyup: ", e.target.value)
    );

    userEvent.type(input, "testing");
  });
});

describe.skip("Element: button", () => {
  it("should show click steps", () => {
    document.body.innerHTML = "<button>text</button>";

    const button = screen.getByRole("button");
    button.addEventListener("mouseenter", (e) =>
      console.log("mouseenter: ", e.target)
    );
    button.addEventListener("click", (e) => console.log("click: ", e.target));

    userEvent.click(button);
  });
});
