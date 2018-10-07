const styles = {
  panels: {
    minHeight: '100vh',
    overflow: 'hidden',
    display: 'flex',
    color: 'red',
  },
  panel: {
    background: '#6b0f9c',
    boxShadow: 'inset 0 0 0 5px rgba(255, 255, 255, 0.1)',
    color: 'white',
    textAlign: 'center',
    /* Safari transitionend event.propertyName ::: flex */
    /* Chrome + FF transitionend event.propertyName ::: flex-grow */
    transition: 'font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11)',
    // 'flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s',
    fontSize: '20px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel1: {
    backgroundImage: "url('https://source.unsplash.com/gYl-UtwNg_I/1500x1500')",
  },
  panel2: {
    backgroundImage: 'url("https://source.unsplash.com/rFKUFzjPYiQ/1500x1500")',
  },
  panel3: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib:rb-0.3.5&q:80&fm:jpg&crop:faces&cs:tinysrgb&w:1500&h:1500&fit:crop&s:967e8a713a4e395260793fc8c802901d")',
  },
  panel4: {
    backgroundImage: 'url("https://source.unsplash.com/ITjiVXcwVng/1500x1500")',
  },
  panel5: {
    backgroundImage: 'url("https://source.unsplash.com/3MNzGlQM7qs/1500x1500")',
  },

  /* Flex Children */
  panelChildren: {
    margin: 0,
    width: '100%',
    transition: 'transform 0.5s',
    flex: '1 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // .panel > *:first-child {
  //   transform: translateY(-100%),
  // }

  // .panel.open-active > *:first-child {
  //   transform: translateY(0),
  // }

  // .panel > *:last-child {
  //   transform: translateY(100%),
  // }

  // .panel.open-active > *:last-child {
  //   transform: translateY(0),
  // }

  // .panel p {
  //   text-transform: uppercase,
  //   font-family: 'Amatic SC', cursive,
  //   text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45),
  //   font-size: 2em,
  // }

  // .panel p:nth-child(2) {
  //   font-size: 4em,
  // }

  // .panel.open {
  //   font-size: 40px,
  //   flex: 5,
  // }
};

export default styles;
