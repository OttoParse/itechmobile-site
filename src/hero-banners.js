const heroBanners = [
  new URL('./assets/hero-accessories.svg', import.meta.url).href,
  new URL('./assets/hero-repair.svg', import.meta.url).href,
]

function applyHeroBanners() {
  const images = document.querySelectorAll('.hero-slide .hero-image')
  if (images.length < heroBanners.length) return false

  heroBanners.forEach((src, index) => {
    images[index].src = src
    images[index].style.objectPosition = 'center center'
  })

  return true
}

if (!applyHeroBanners()) {
  const observer = new MutationObserver(() => {
    if (applyHeroBanners()) observer.disconnect()
  })

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  })
}
