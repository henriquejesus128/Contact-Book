import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
    box-sizing: border-box;
}
body {
    line-height: 1;
    font-family: var(--inter);
    background-color: var(--grey-4);
    max-width:100vw;
    height:100vh;
}
ol, ul {
    list-style: none;
    text-decoration: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
button {
  cursor: pointer;
}
:root{
  /* Primary Palette */
  --color-primary:#5D75A6;
  --color-primary-focus: #405173;
  --color-primary-negative: #283040;

  /* Grey Scale Palette */
  --grey-0: #F8F9FA;
  --grey-1: #868E96;
  --grey-2: #343B41;
  --grey-3: #212529;
  --grey-4: #121214;

  /* Feedback Palette */
  --sucess: #3FE864;
  --negative: #E83F5B;

  /* Typography */
  /* --inter: 'Inter', sans-serif; */
}
`;
