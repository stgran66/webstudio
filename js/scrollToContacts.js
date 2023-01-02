(() => {
  const refs = {
    contactLinks: document.querySelectorAll('.to-contact-link'),
    footer: document.querySelector('#page-footer'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
  };

  refs.contactLinks.forEach(link =>
    link.addEventListener('click', e => {
      e.preventDefault();

      refs.footer.scrollIntoView({
        behavior: 'smooth',
      });
      refs.menu.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    })
  );
})();
