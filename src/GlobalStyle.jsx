import "./normalize.css";
import { createGlobalStyle } from "styled-components";
import { WIDTH } from "./utils/constants";

const GlobalStyle = createGlobalStyle`
  :root,
  :root[color-theme='light'] {
    --ColorPrimary: #2f6ff2;
    --ColorBackground: #ffffff;
    --ColorSurface: #121314;
    --ColorGrayLv1: #f3f5fa;
    --ColorGrayLv2: #d9dbe0;
    --ColorGrayLv3: #8d9299;
    --ColorGrayLv4: #47494d;
    --ColorError: #ff3440;
    --ColorLowError: #ffc533;
    --ColorActivation: #dee8ff;
    --EffectShadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.04); }

  :root[color-theme='dark'] {
    --ColorPrimary: #3075ff;
    --ColorBackground: #1f2123;
    --ColorSurface: #ffffff;
    --ColorGrayLv1: #121314;
    --ColorGrayLv2: #595f66;
    --ColorGrayLv3: #d9dbe0;
    --ColorGrayLv4: #f3f5fa;
    --ColorError: #fc7377;
    --ColorLowError: #ffe187;
    --ColorActivation: #2b3444;
    --EffectShadow: 0px 8px 12px 0px rgba(18, 18, 18, 0.2),
          0px 8px 12px 0px rgba(18, 18, 18, 0.2); }

  html {
    font-size: 10px;
  }
  body {
    margin:0;
    font-size: 1.6rem;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p{
    margin: 0;
  }
  
  dl, dt, dd, ol, ul, li{
    padding:0;
    margin: 0;
  }

  ul, ol, li{
    list-style: none;
  }

  button {
    border: 0;
    cursor:pointer;
    font-family: inherit;
    background: none;

    &:disabled {
      cursor: default;
    }
  }

  label {
    user-select: none;
  }

  input, textarea{
    &::placeholder {
      font-size: 1.4rem;
      color:var(--ColorGrayLv4);
    }
  }
  
  .sr-only {
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  }

  .max-width {
    width: ${WIDTH.maxWidth};
    margin: 0 auto;
    max-width: calc(100% - (${WIDTH.marginWidth} * 2));
  }

  #root{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .contents{
    flex-grow: 1;
    position: relative;
  }

  .sl-ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .multi-ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }

  a.underline{
    color:var(--ColorPrimary);
    text-decoration: underline;
  }

  code {
    font-family: 'Source Code Pro', monospace;
  }
`;

export default GlobalStyle;
