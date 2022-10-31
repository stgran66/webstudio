(() => {
  const refs = {
    filterForm: document.querySelector('.filter'),
    examples: document.querySelector('.examples-list'),
    filterButtons: document.querySelectorAll('.filter__option'),
  };

  refs.filterButtons.forEach(button => button.addEventListener('click', onFilterChange));

  let activeOption;

  function onFilterChange() {
    const chosenFilter = Object.values(refs.filterForm.elements['filter-option']).filter(
      option => option.checked
    );
    activeOption = chosenFilter[0].value;

    Object.values(refs.examples.children).map(example => (example.style.display = 'block'));

    switch (activeOption) {
      case 'websites':
        Object.values(refs.examples.children).map(example => {
          if (!Object.values(example.classList).includes('websites')) {
            example.style.display = 'none';
          }
        });
        return;

      case 'apps':
        Object.values(refs.examples.children).map(example => {
          if (!Object.values(example.classList).includes('apps')) {
            example.style.display = 'none';
          }
        });
        return;

      case 'design':
        Object.values(refs.examples.children).map(example => {
          if (!Object.values(example.classList).includes('design')) {
            example.style.display = 'none';
          }
        });
        return;

      case 'marketing':
        Object.values(refs.examples.children).map(example => {
          if (!Object.values(example.classList).includes('marketing')) {
            example.style.display = 'none';
          }
        });
        return;

      default:
        return;
    }
  }
})();
