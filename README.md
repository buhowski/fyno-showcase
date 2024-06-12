## Quick Overview

Node.js >= 20V

```sh
git clone https://github.com/buhowski/showcase-example.git
cd showcase-example
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Project Structure

```js
+-- public	    // # Static assets served directly, such as HTML file
+-- src
|   +-- assets	    // # Global assets like fonts, icons, and images.
|   +-- components	// # Reusable React components.
|   +-- styles	    // # Global SCSS styles and variables.
|   +-- App.scss	// # SCSS file specific to the App component.
|   +-- App.tsx	    // # Main App component for the project.
|   +-- index.tsx	// # Entry point for the React application.
...
```

This project use [Create React App](https://github.com/facebook/create-react-app).
