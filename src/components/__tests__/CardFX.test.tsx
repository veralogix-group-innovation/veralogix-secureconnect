import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { CardFX } from "../CardFX";

const renderCard = () =>
  render(
    <MemoryRouter>
      <CardFX
        title="AI Compliance"
        icon={<span>🤖</span>}
        description="Secure workflows for regulated teams."
        ctaLabel="Explore"
        ctaLink="/ai"
      />
    </MemoryRouter>
  );

describe("CardFX interactions", () => {
  it("keeps the CTA clickable during the delayed close window and supports focus", async () => {
    const user = userEvent.setup();

    renderCard();

    const cta = screen.getByRole("link", { name: /explore/i });
    const card = cta.closest("[data-open]") as HTMLElement;

    expect(card).toHaveAttribute("data-open", "false");

    await user.hover(card);
    expect(card).toHaveAttribute("data-open", "true");

    await user.unhover(card);
    expect(card).toHaveAttribute("data-open", "true");

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 250));
    });
    expect(card).toHaveAttribute("data-open", "true");

    await user.tab();
    expect(card).toHaveAttribute("data-open", "true");

    await user.tab();
    expect(card).toHaveAttribute("data-open", "true");

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 250));
    });
    expect(card).toHaveAttribute("data-open", "true");

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 120));
    });
    expect(card).toHaveAttribute("data-open", "false");
  });
});
