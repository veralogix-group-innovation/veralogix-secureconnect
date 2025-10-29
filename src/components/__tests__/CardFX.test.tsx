import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import { CardFX } from "../CardFX";

const renderCard = () =>
  render(
    <MemoryRouter initialEntries={["/"]}>
      <div>
        <CardFX
          title="AI Compliance"
          icon={<span>🤖</span>}
          description="Secure workflows for regulated teams."
          ctaLabel="Explore"
          ctaLink="/ai"
        />
        <button type="button">Next focus target</button>
      </div>
    </MemoryRouter>
  );

describe("CardFX interactions", () => {
  it("keeps the CTA clickable during the delayed close window and supports focus", async () => {
    const user = userEvent.setup();

    renderCard();

    const cta = screen.getByRole("link", { name: /explore/i });
    const card = cta.closest("[data-open]") as HTMLElement;

    expect(card).toHaveAttribute("data-open", "false");

    const clickSpy = vi.fn();
    cta.addEventListener("click", clickSpy);

    await user.hover(card);
    expect(card).toHaveAttribute("data-open", "true");

    await user.tab();
    expect(cta).toHaveFocus();

    await user.unhover(card);
    expect(card).toHaveAttribute("data-open", "true");

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 250));
    });
    expect(card).toHaveAttribute("data-open", "true");

    fireEvent.click(cta);
    expect(clickSpy).toHaveBeenCalled();
    expect(card).toHaveAttribute("data-open", "true");

    await user.tab();
    const outsideButton = screen.getByRole("button", { name: /next focus target/i });
    expect(outsideButton).toHaveFocus();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 350));
    });
    expect(card).toHaveAttribute("data-open", "false");
  });
});
