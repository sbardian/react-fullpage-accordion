![](https://img.shields.io/circleci/project/github/sbardian/react-fullpage-accordion/develop.svg?style=for-the-badge) ![](https://img.shields.io/coveralls/github/sbardian/react-fullpage-accordion/develop.svg?style=for-the-badge)

# Full page (or set height) fancy React accordion

## After doing [Javascript 30](https://javascript30.com/) by Wes Bos, I decided to make his accordion (from lesson 5) a React component, with some tweaks! Enjoy.

> Your React application will need to handle importing `.css` files (e.g. `css-loader` if using `webpack`), if you care to use the provided/default CSS.

> You will need to set any parent elemnts height to 100% or 100vh, and not pass a height prop, if you wish to have a fullpage accordion.

CodeSandbox [Demo](https://codesandbox.io/s/r7v9zlrp6n)

### Install:

npm:

```
npm -i react-fullpage-accordion
```

yarn:

```
yarn add react-fullpage-accordion
```

### Usage:

> Optional/Recommended: import provided/default CSS

```
import "react-fullpage-accordion/react-fullpage-accordion.css"
```

## Example

```
import React from 'react'
import { FullpageAccordion, Panel } from 'react-fullpage-accordion';

<FullpageAccordion height="500px">
    <Panel itemId="0" background={'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500'}>
        <p>Give</p>
        <p>
            <a href="/duckPage">
                Duck!
            </a>
        </p>
        <p>a try!</p>
    </Panel>
    <Panel itemId="1" background={'https://source.unsplash.com/ITjiVXcwVng/1500x1500'}>
        <p>Give</p>
        <p>
            <a href="/oberynPage">
                Oberyn!
            </a>
        </p>
        <p>a try!</p>
    </Panel>
</FullpageAccordion>
```

## Props for `FullpageAccordion` Component:

| prop   | type   | default        | description                   | example | required |
| ------ | ------ | -------------- | ----------------------------- | ------- | -------- |
| height | string | 100% of parent | Height of the panel container | '500px' |          |

## Props for Panel Component:

| prop       | type   | default | description      | example                                             | required |
| ---------- | ------ | ------- | ---------------- | --------------------------------------------------- | -------- |
| itemId     | string | n/a     | Id for the Panel | '1', 'item-1'                                       | X        |
| background | string | n/a     | Image source     | 'https://source.unsplash.com/ITjiVXcwVng/1500x1500' |          |

## Information

A `Panel` works best with three (3) children. We transition the first and last children into the panel on click, out again on the second click, or on another panel being clicked. Three children is recommended, but it is not a requirement. You can also override or provide your own CSS for the children, this is just the default behavior.

## Class names

The following are the provided class names if you want to write your own CSS.

| class                  | description      |
| ---------------------- | ---------------- |
| panels                 | Panel container  |
| panel                  | Indivitual panel |
| panel open open-active | The active panel |

To transition the children our CSS uses the following:

```
.panel > *:first-child {
  transform: translateY(-100%);
}

.panel.open-active > *:first-child {
  transform: translateY(0);
}

.panel > *:last-child {
  transform: translateY(100%);
}

.panel.open-active > *:last-child {
  transform: translateY(0);
}
```
