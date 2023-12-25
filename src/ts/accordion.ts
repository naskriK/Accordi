const faqContainer = document.querySelector(".faq");
const faqButtons = document.querySelectorAll(".btn--faq");

const hideAllFAQSContent = () => {
  faqButtons?.forEach((faqButton) => {
    faqButton.setAttribute("aria-expanded", "false");
    toggleHiddenContent(faqButton, "true");
  });
};

const toggleHiddenContent = (
  controlsElement: Element,
  state: "true" | "false"
) => {
  const hiddenTargetContent = document.querySelector(
    `#${controlsElement?.getAttribute("aria-controls")}`
  );

  if (!hiddenTargetContent) return;

  hiddenTargetContent?.setAttribute("aria-hidden", state);
};

const handleAccordionItemFunctionality = (target: HTMLButtonElement) => {
  const isExpanded = target?.getAttribute("aria-expanded") === "true";

  hideAllFAQSContent();

  if (isExpanded) return;

  target?.setAttribute("aria-expanded", "true");
  toggleHiddenContent(target, "false");
};

faqContainer?.addEventListener("click", (ev) => {
  const target = ev.target;

  if (!(target instanceof HTMLButtonElement)) return;

  if (target?.classList.contains("btn--faq")) {
    handleAccordionItemFunctionality(target);
  }
});
