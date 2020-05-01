import { createContext } from 'react';

export const themes = {
  light: {
    foreground: '#fff',
    background: '#263238',
  },
  dark: {
    foreground: '#263238',
    background: '#fff',
  },
};

const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export default ThemeContext;
