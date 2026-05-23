(function () {
  var modal = document.querySelector("[data-publication-modal]");
  if (!modal) return;

  var title = modal.querySelector("[data-publication-modal-title]");
  var venue = modal.querySelector("[data-publication-modal-venue]");
  var badges = modal.querySelector("[data-publication-modal-badges]");
  var summary = modal.querySelector("[data-publication-modal-summary]");
  var abstract = modal.querySelector("[data-publication-modal-abstract]");
  var webpage = modal.querySelector("[data-publication-modal-webpage]");
  var closeButtons = modal.querySelectorAll("[data-publication-close]");
  var lastTrigger = null;

  function openModal(card) {
    lastTrigger = card;
    title.textContent = card.dataset.publicationTitle || "";
    venue.textContent = card.dataset.publicationVenue || "";
    badges.textContent = card.dataset.publicationBadges || "";
    summary.textContent = card.dataset.publicationSummary || "Summary coming soon.";
    abstract.textContent = card.dataset.publicationAbstract || "Abstract coming soon.";

    if (card.dataset.publicationWebpage) {
      webpage.href = card.dataset.publicationWebpage;
      webpage.hidden = false;
    } else {
      webpage.hidden = true;
    }

    modal.hidden = false;
    document.body.classList.add("modal-open");
    var closeButton = modal.querySelector(".publication-dialog-close");
    if (closeButton) closeButton.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll("[data-publication-card]").forEach(function (card) {
    card.addEventListener("click", function (event) {
      if (event.target.closest("a")) return;
      openModal(card);
    });

    card.addEventListener("keydown", function (event) {
      if (event.target.closest("a")) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(card);
      }
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", function (event) {
    if (!modal.hidden && event.key === "Escape") {
      closeModal();
    }
  });
})();
