// src/scripts/view-transitions.ts
function isSameOrigin(href: string) {
  try {
    return new URL(href, location.href).origin === location.origin;
  } catch {
    return false;
  }
}

document.addEventListener('click', (evt) => {
  const target = (evt.target as HTMLElement)?.closest?.('a');
  if (!target) return;
  const href = target.getAttribute('href');
  if (!href) return;
  if (
    target.getAttribute('target') === '_blank' ||
    target.hasAttribute('download') ||
    target.hasAttribute('data-no-vt')
  )
    return;

  const url = new URL(href, location.href);

  // same-page hash -> smooth scroll wrapped in view transition
  if (url.pathname === location.pathname && url.hash) {
    evt.preventDefault();
    const id = url.hash.slice(1);
    const el = document.getElementById(id);
    const doScroll = () =>
      el
        ? el.scrollIntoView({ behavior: 'smooth' })
        : (location.hash = url.hash);
    if (
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      // @ts-ignore
      document.startViewTransition(() => {
        doScroll();
        history.pushState(null, '', url.href);
      });
    } else {
      doScroll();
      history.pushState(null, '', url.href);
    }
    return;
  }

  // full same-origin navigation -> wrap location change
  if (!isSameOrigin(href)) return;
  evt.preventDefault();
  if (
    'startViewTransition' in document &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    // @ts-ignore
    document.startViewTransition(() => {
      location.href = url.href;
    });
  } else {
    location.href = url.href;
  }
});
