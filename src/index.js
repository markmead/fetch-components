export function renderComponent(componentType, componentUrl) {
  const componentsToRender = [
    ...document.querySelectorAll(`[data-render=${componentType}]`),
  ]

  for (const componentToRender of componentsToRender) {
    const componentData = componentToRender.dataset

    fetch(componentUrl, {
      method: 'get',
    })
      .then((fetchResponse) => fetchResponse.text())
      .then((responseHtml) => {
        const dataKeys = Array.from(responseHtml.matchAll(/{{(.*?)}}/g)).map(
          (match) => match[1]
        )
        let newHtml

        for (const dataKey of dataKeys) {
          newHtml = responseHtml.replace(
            `{{${dataKey}}}`,
            componentData[dataKey] || ''
          )
        }

        componentToRender.innerHTML = newHtml
      })
  }
}

export function waitFor(renderTarget) {
  return new Promise((resolve) => {
    const renderedComponent = document.querySelector(
      `[data-render="${renderTarget}"]`
    )

    if (renderedComponent.innerHTML) {
      return resolve(renderedComponent)
    }

    const renderObserver = new MutationObserver(() => {
      if (renderedComponent.innerHTML) {
        resolve(renderedComponent)

        renderObserver.disconnect()
      }
    })

    renderObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
}
