# setup

## install react

```bash
C:\MoonDev\withLang\inNode\nodeLearning\nomadcoders> npx create-react-app movieql-client
C:\MoonDev\withLang\inNode\nodeLearning\nomadcoders> cd movieql-client
C:\MoonDev\withLang\inNode\nodeLearning\nomadcoders\movieql-client> npm i @apollo/client graphql react-router-dom  #  강좌에서는 react-router-dom@6로 되어 있음
```

## delete files
- src/App.css
- src/App.test.js
- src/index.css
- src/logo.svg
- src/reportWebBitals.js
- src/setupTests.js

## edit files

> src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

> src/App.js
```javascript
export default function App() {
  return <div />;
}
```

## create files
> src/routes/Home.js
```javascript
export default function Home() {
  return <div></div>
}
```

> src/routes/Movies.js
```javascript
export default function Movies() {
  return <div></div>
}
```

## Router
> src/App.js
```javascript
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Movies from "./routes/Movies";
import Movie from "./routes/Movie";

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Movies />} />
    <Route path="/movies/:id" element={<Movie />} />
  </Routes>
  </BrowserRouter>;
}
```

> src/routes/Movies.js
```javascript
export default function Movies() {
    return <div>This is a list of movies</div>
}
```

> src/routes/Movie.js
```javascript
export default function Movie() {
    return <div>This is movie details</div>
}
```

## run
```
npm start
```

## check
```
http://localhost:3000/
http://localhost:3000/movies/123
```

# run server/client

## run server
```bash
cd ../tweetql
nomadcoders\tweetql> npm start
```

## run client
```
nomadcoders\movieql-client> npm start
```

## check
> chrome
```
http://localhost:3000/
```

> chrome dev tools
- console 확인: Object data allMovies: Array(20)

# styled

> styled-components
```
npm i styled-components
```