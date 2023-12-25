const faqContainer = document.querySelector(".faq");

const handleAccordionItemFunctionality = (target: HTMLButtonElement) => {
  console.log(target);
};

faqContainer?.addEventListener("click", (ev) => {
  const target = ev.target;

  if (!(target instanceof HTMLButtonElement)) return;

  if (target?.classList.contains("btn--faq")) {
    handleAccordionItemFunctionality(target);
  }
});
