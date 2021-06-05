export function render(type, url) {
  const els = [...document.querySelectorAll(`[data-render=${type}]`)]

  for (const el of els) {
    const dataset = el.dataset

    fetch(url, {
      method: 'get',
    })
      .then((res) => res.text())
      .then((html) => {
        const datakeys = Object.keys(dataset)

        for (const key of datakeys) {
          html = html.replace(`{{${key}}}`, dataset[key])
        }

        el.innerHTML = html
      })
  }
}

window.addEventListener('load', function () {
  render('card', 'card.html')
  render('banner', 'banner.html')
})
