## How to change icon color

> Using untitled icons lib : [@untitled-ui/icons-react.](https://github.com/devias-io/untitled-ui)

The default color of icon is #344054 (gray700). If you need to change the color of icon, see the code below.

```js
const withStyledIcon = (IconComponent, strokeColor = "#344054") => styled(
  IconComponent
)`
  path {
    stroke: ${strokeColor}; /* Use the parameter for stroke color */
  }
`;
```

## How to add theme

Add `<ThemeProvider>` in `main.jsx` as below

```jsx
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

## How to reset css

Add `<GlobalStyle />` in `main.jsx` as below

```jsx
<ThemeProvider theme={theme}>
  <GlobalStyle />
  <App />
</ThemeProvider>
```
