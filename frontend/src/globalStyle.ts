import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

html, body, #root {
  height: 100vh;
  width: 100%;
}

#root {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(180deg, #a696d2 0, #867abe 25%, #635da8 50%, #3b4293 75%, #002c80 100%);
}
`;