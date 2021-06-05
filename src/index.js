export function render(type, url) {
  const els = [...document.querySelectorAll(`[data-render=${type}]`)]

  for (const el of els) {
    const data = el.dataset

    fetch(url, {
      method: 'get',
    })
      .then((res) => res.text())
      .then((html) => {
        const keys = Object.keys(data)

        for (const key of keys) {
          html = html.replace(`{{${key}}}`, data[key])
        }

        el.innerHTML = html
      })
  }
}
