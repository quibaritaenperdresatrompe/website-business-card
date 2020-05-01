import React from 'react';
import ThemeContext from './ThemeContext';

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height={24}
          onClick={toggleTheme}
          style={{ cursor: 'pointer' }}
          fill={theme.foreground}
        >
          <path d="M256 0C114.848 0 0 114.848 0 256s114.848 256 256 256 256-114.848 256-256S397.152 0 256 0zm0 480C132.48 480 32 379.52 32 256S132.48 32 256 32s224 100.48 224 224-100.48 224-224 224z" />
          <path d="M256 64v384c112 0 192-85.968 192-192 0-106.048-80-192-192-192z" />
        </svg>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
