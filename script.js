const categoryButtons = document.querySelectorAll('.category-button');
const panels = document.querySelectorAll('.content-panel');

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;

    categoryButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === targetId);
    });

    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  });
});

