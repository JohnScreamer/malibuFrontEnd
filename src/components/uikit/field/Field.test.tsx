import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Field from "./Field.js";

describe("Field component", () => {
    it("should render the component", () => {
        const { container } = render(<Field />);
        expect(container.textContent).toContain("Field");
    });

    it("should render the input with the correct props", () => {
        const input = screen.getByRole("input") as HTMLInputElement;
        expect(input.type).toBe("text");
    });

    it("should render the input with the correct placeholder", () => {
        const input = screen.getByRole("input") as HTMLInputElement;
        expect(input.placeholder).toBe("Enter your text here");
    });
});
