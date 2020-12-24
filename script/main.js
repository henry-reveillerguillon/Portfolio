window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {

    navbar.classList.remove('white');
  } else if (window.scrollY < 80) {
    navbar.classList.add('white');
  }
});

const navigationLinks = document.querySelectorAll('.menu a');
const sections = [...navigationLinks].map(
  link => document.querySelector(link.hash)
);

if (sections.length > 0) {
  // Observer options
  const ratio = 0.4;
  const y = Math.round(window.innerHeight * ratio);

  // Create our observer
  const observer = new IntersectionObserver(callback, {
    rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
  });

  // Observe our sections
  sections.forEach(section => observer.observe(section));


  /**
   *
   *
   * @param {IntersectionObserverEntry[]} entries
   * @param {IntersectionObserver} observer
   */
  function callback (entries, observer) {
    entries.forEach(entry => {
      // If the section is in the intersectionRatio, activate it
      if (entry.isIntersecting) {
        activate(entry.target);
      }
    })
  }


  /**
   * Add .active class to the navbar anchor
   *
   * @param {HTMLElement} element
   */
  function activate (element) {
    // Find the anchor element in the navbar
    const id = element.id;
    const navLink = document.querySelector(`a[href="#${id}"]`);

    // Remove already active anchors
    navLink.parentElement.parentElement
      .querySelectorAll('.active')
      .forEach(node => node.classList.remove('active'));

    // Add .active class to the anchor
    navLink.classList.add('active');
  }
}