# HTML Components

Write simple, reusable HTML components in the style of React and Vue 🚀

### Using with a CDN

```html
<script
  defer
  src="https://unpkg.com/html-components@latest/dist/render.min.js"
></script>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    renderHtml('card', 'card.html')
  })
</script>
```

### Using with a Package Manager

```shell
yarn add -D html-components

npm install -D html-components
```

```js
import renderHtml from 'html-components'

document.addEventListener('DOMContentLoaded', () => {
  renderHtml('card', 'card.html')
})
```

## How it Works

**Create a HTML element with the `data-render` attribute.**

```html
<div data-render="card">
</div>
```

_This is the name of the component and is required when rendering._

**Add the props you want to pass to the component via `data-render-<prop>` attributes.**

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
- public
  - card.html
```

Typically, the `root` is the `public` folder.


**Create the component HTML.**

```html
<a href="{{renderHref}}">
  <h5>{{renderTitle}}</h5>
  <p>{{renderText}}</p>
</a>
```

_Note the lack of spacing between `{{renderX}}`, that is required._

**Render the HTML with the `renderHtml` method, passing in the component name and file.**

```js
document.addEventListener('DOMContentLoaded', () => {
  renderHtml('card', 'card.html')
})
```
