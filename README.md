# Fetchtml

Write React/Vue like components with HTML, built off the power of `fetch`

## Install

### CDN

```
https://unpkg.com/fetchtml@1.0.2/index.js
```

### NPM or Yarn

```shell
npm i fetchtml

yarn add fetchtml
```

Then import it with:

```js
import 'fetchtml'
```

## Usage

1. Create a HTML element with a `data-render=""` attribute

```html
<div data-render="card"></div>
```

2. Add `data-<name>=""` attributes with the content you want to pass (props)

```html
<div data-render="card" data-title="Get Started" data-text="Join 1000+ happy customers" data-href="/join"></div>
```

3. Create the component file at the root of your project

```
- src
- utils
...
card.html
```

The "root" is often the `public` folder

4. Write the HTML for the component with Vue/React like syntax for dynamic data (props)

```html
<a class="p-8 border-2 border-blue-600 block" href="{{href}}">
  <h5 class="text-blue-600 text-xl">{{title}}</h5>
  <p class="text-gray-400">{{text}}</p>
</a>
```

Notice the lack of spacing between the `{{}}`, that is required (for now)

5. Call the `render()` method with the name of the component and the file path

```js
render('card', 'card.html')
```

The `'card'` value comes from the `data-render=""` set on step 1

I'd advise calling the `render()` once the window has loaded:

```js
window.addEventListener('load', function () {
  render('card', 'card.html')
  render('banner', 'banner.html')
})
```
