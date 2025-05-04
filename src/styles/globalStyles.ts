import { createGlobalStyle } from 'styled-components';
import { slate, slateDark, blue, blueDark } from '@radix-ui/colors';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: ${slate.slate1};
    --text-color: ${slateDark.slate12};
    --primary-color: ${blue.blue9};
    --secondary-color: ${blueDark.blue9};
    --border-color: ${slate.slate7};
    --input-background: white;
    --card-background: white;
    --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    --mobile-width: 375px;
    --mobile-height: 667px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.5;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;