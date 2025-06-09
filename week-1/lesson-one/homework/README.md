### Lesson 1 Homework
- Initialize a new React app using [npm create vite@latest](https://vite.dev/guide/) inside of the homework directory
    - cd into the new directory
    - Run `npm install`

- Build a landing page using React (find a cool website to use as inspiration, don't worry about navigation for now) 
    - If they have photos, take them from the website to use or find replacements for them
    - Try to get it to look as similar to the site as you can

- Create a folder in the `src` directory called `components` and `pages`
    - Your landing page should be in the `pages` folder and then imported in the `App.jsx` file
    - Any components you create should be in the `components` folder and then imported into your landing page

- Use props to pass data from one component to another ( i.e. a card component that accepts a name as a prop and displays Hello, [name]!)
- EXAMPLE: Card.tsx

```jsx
const Card = ({ name }) => {
  return <div>Hello, {name}!</div>;
};
```

```jsx
Use the Card component in your LandingPage.jsx or wherever you use it
<Card name="Your Name" /> // hardcoding values are fine for right now
```