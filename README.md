# Full page (or set height) fancy React accordion

## After doing [Javascript 30](https://javascript30.com/) by Wes Bos, I decided to make his accordion (from lesson 5) a React component! Enjoy.

### Note:  Your React application will need to handle importing `.css` files (e.g. `css-loader` if using `webpack`). 

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
```
import FullpageAccordion from 'react-fullpage-accordion';
```

### Props: 
```
<FullpageAccordion
    items={data}   // Required, array of data objects, see below
    height="500px" // Optional, height of panel container
/>
```

### Data example:
```
const data = [
    {
    title: "title1",
    itemId: 1,
    top: "Hey",
    middle: "Lets",
    bottom: "Dance",
    imageUrl: "https://source.unsplash.com/gYl-UtwNg_I/1500x1500"
    },
    {
    title: "title2",
    itemId: 2,
    top: "Give",
    middle: "Take",
    bottom: "Receive",
    imageUrl: "https://source.unsplash.com/rFKUFzjPYiQ/1500x1500"
    },
    {
    title: "title3",
    itemId: 3,
    top: "Experience",
    middle: "It",
    bottom: "Today",
    imageUrl:
        "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d"
    },
    {
    title: "title4",
    itemId: 4,
    top: "Give",
    middle: "All",
    bottom: "You Can",
    imageUrl: "https://source.unsplash.com/ITjiVXcwVng/1500x1500"
    },
    {
    title: "title5",
    itemId: 5,
    top: "Life",
    middle: "In",
    bottom: "Motion",
    imageUrl: "https://source.unsplash.com/3MNzGlQM7qs/1500x1500"
    }
];
```



