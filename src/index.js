export default function (type, url) {
  const els = [...document.querySelectorAll(`[data-render=${type}]`)]

  for (const el of els) {
    const data = el.dataset

    fetch(url, {
      method: 'get',
    })
      .then((res) => res.text())
      .then((html) => {
        const keys = Array.from(html.matchAll(/{{(.*?)}}/g)).map(
          (match) => match[1]
        )

        for (const key of keys) {
          html = html.replace(`{{${key}}}`, data[key] || '')
        }

        el.innerHTML = html
      })
  }
}
