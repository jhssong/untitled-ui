import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Pretendard, Inter, sans-serif;
    color-scheme: light only;
  }
  
  html {
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-user-select: none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }

  input {
    background-color: ${({ theme }) => theme.colors.white}
  }

  svg {
    width: 20px;
    height: 20px;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /*
  Copyright (c) 2021 Kil Hyung-jin, with Reserved Font Name Pretendard.
  https://github.com/orioncactus/pretendard

  This Font Software is licensed under the SIL Open Font License, Version 1.1.
  This license is copied below, and is also available with a FAQ at:
  http://scripts.sil.org/OFL
  */

  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src: local('Pretendard Black'), url(./woff2/Pretendard-Black.woff2) format('font-woff2'), url(./woff/Pretendard-Black.woff) format('font-woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: local('Pretendard ExtraBold'), url(./woff2/Pretendard-ExtraBold.woff2) format('font-woff2'), url(./woff/Pretendard-ExtraBold.woff) format('font-woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: local('Pretendard Bold'), url(./woff2/Pretendard-Bold.woff2) format('font-woff2'), url(./woff/Pretendard-Bold.woff) format('font-woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: local('Pretendard SemiBold'), url(./woff2/Pretendard-SemiBold.woff2) format('font-woff2'), url(./woff/Pretendard-SemiBold.woff) format('font-woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: local('Pretendard Medium'), url(./woff2/Pretendard-Medium.woff2) format('font-woff2'), url(./woff/Pretendard-Medium.woff) format('font-woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'), url(./woff2/Pretendard-Regular.woff2) format('font-woff2'), url(./woff/Pretendard-Regular.woff) format('font-woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: local('Pretendard Light'), url(./woff2/Pretendard-Light.woff2) format('font-woff2'), url(./woff/Pretendard-Light.woff) format('font-woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src: local('Pretendard ExtraLight'), url(./woff2/Pretendard-ExtraLight.woff2) format('font-woff2'), url(./woff/Pretendard-ExtraLight.woff) format('font-woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: local('Pretendard Thin'), url(./woff2/Pretendard-Thin.woff2) format('font-woff2'), url(./woff/Pretendard-Thin.woff) format('font-woff');
  }
`;

export default GlobalStyle;
