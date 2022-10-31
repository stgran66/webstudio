(() => {
  const refs = {
    contactLinks: document.querySelectorAll('.to-contact-link'),
    footer: document.querySelector('#page-footer'),
  };

  refs.contactLinks.forEach(link =>
    link.addEventListener('click', e => {
      e.preventDefault();

      refs.footer.scrollIntoView({
        behavior: 'smooth',
      });
    })
  );
})();
