import { css } from '@emotion/react';

import { reset } from './reset';

export const globalStyle = css`
  ${reset}

  :root {
    --color-border: #e2e3eb;
    --color-background: #ffffff;
    --color-text-primary: #1d1c24;

    --price-level-1: #32b038;
    --price-level-2: #2a952e;
    --price-level-3: #227d26;
    --price-level-4: #154d17;
    --price-level-5: #e9b738;
    --color-flex: var(--price-level-5);
  }

  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'Robot', sans-serif;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Spoqa Han Sans Neo', 'Robot', sans-serif;
    color: var(--color-text-primary);
    background-color: var(--color-background);
  }

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`;
