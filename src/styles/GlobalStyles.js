import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --font-size-sm: 14px;
  --font-size-md: 16px;
  --font-size-lg: 20px;
  --font-size-xl: 32px;
  --font-size-max: 64px;

  --color-stone-0: #fff;
  --color-stone-100: #f8fafc;
  --color-stone-300: #cdd5e0;
  --color-stone-900: #111729;

  --color-purple-600: #111729;

  --color-navy-600: #4036a9;

  --color-warning-500: #FAA300;

  --line-h-s: 1.4;
  --line-h-m: 1.6;
  --line-h-l: 1.8;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a:link,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}


button,
input {
  color: inherit;
  font: inherit;
  border: none;
  background: none;
  outline: none;
}

button {
  cursor: pointer;
}

textarea {
  color: inherit;
  font: inherit;
  border: none;
  background: none;
  outline: none;
  resize: none;
}

ol,
ul,
li {
  list-style: none
}

body {
  color: var(--color-stone-800);
  font-family: "Be Vietnam Pro", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  line-height: 1;
  background-image: url('/bg-image.svg');
  background-size: cover;
  background-repeat: no-repeat;
}

#root {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}
`;

export default GlobalStyles;
