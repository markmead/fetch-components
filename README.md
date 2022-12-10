# HTML Components

Write simple, reusable HTML components in the style of React and Vue 🚀

### Using with a CDN

```html
<script
  defer
  src="https://unpkg.com/fetch-components@latest/dist/render.min.js"
></script>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    renderHtml.renderComponent('card', '/components/card.html')
  })
</script>
```

### Using with a Package Manager

```shell
yarn add -D fetch-components

npm install -D fetch-components
```

```js
import renderHtml from 'fetch-components'

document.addEventListener('DOMContentLoaded', () => {
  renderHtml.renderComponent('card', '/components/card.html')
})
```

## How it Works

**Create a HTML element with the `data-render` attribute.**

```html
<div data-render="card"> </div>
```

_This is the name of the component and is required when rendering._

**Add the props you want to pass to the component via `data-render-<prop>`
attributes.**

```html
<div
  data-render="card"
  data-render-title="Get Started"
  data-render-text="Join 1000+ happy customers"
  data-render-href="/join"
>
</div>
```

**Add the component file to the root of your project.**

```
- builds
- src
- components
  - card.html
```

**Create the component HTML.**

```html
<a href="{{renderHref}}">
  <h5>{{renderTitle}}</h5>
  <p>{{renderText}}</p>
</a>
```

_Note the lack of spacing between `{{renderX}}`, that is required._

**Render the HTML with the `renderComponent` method, passing in the component
name and file.**

```js
document.addEventListener('DOMContentLoaded', () => {
  renderHtml.renderComponent('card', '/components/card.html')
})
```

### Nested Components

If you have nested components then you'll want to use the `waitFor` function
that comes with the package.

#### Using with a CDN

```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    renderHtml.renderComponent('parent', '/components/parent.html')

    renderHtml.waitFor('parent').then(() => {
      renderHtml.renderComponent('child', '/components/child.html')

      renderHtml
        .waitFor('child')
        .then(() =>
          renderHtml.renderComponent('subchild', '/components/subchild.html')
        )
    })
  })
</script>
```

#### Using with a Package Manager

```js
import renderHtml from 'fetch-components'

document.addEventListener('DOMContentLoaded', () => {
  renderHtml.renderComponent('parent', '/components/parent.html')

  renderHtml.waitFor('parent').then(() => {
    renderHtml.renderComponent('child', '/components/child.html')

    renderHtml
      .waitFor('child')
      .then(() =>
        renderHtml.renderComponent('subchild', '/components/subchild.html')
      )
  })
})
```

### Stats 📊

![](https://img.shields.io/bundlephobia/min/fetch-components)
![](https://img.shields.io/npm/v/fetch-components)
![](https://img.shields.io/npm/dt/fetch-components)
![](https://img.shields.io/github/license/markmead/fetch-components)
