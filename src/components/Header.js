import { arrayOf, shape, string } from 'prop-types';
import { Link } from 'gatsby';
import React from 'react';

import Avatar from './Avatar';
import ThemeTogglerButton from './ThemeTogglerButton';

export default function Header({ navLinks, siteAuthor, siteTitle }) {
  return (
    <header style={{ display: `flex`, flexDirection: `column`, padding: 80 }}>
      <div style={{ flexGrow: 1, alignSelf: `flex-end`, padding: `20px 0` }}>
        <ThemeTogglerButton />
      </div>
      <div style={{ display: `flex` }}>
        <Link to="/" style={{ flexGrow: 1, textShadow: `none`, backgroundImage: `none`, display: `flex`, alignItems: `center` }}>
          <div style={{ width: 80, marginRight: 20 }}>
            <Avatar style={{ borderRadius: `50%` }} />
          </div>
          <div>
            <h1 style={{ margin: 0 }}>{siteTitle}</h1>
            <code>{siteAuthor}</code>
          </div>
        </Link>
        {navLinks.length > 0 && (
          <nav>
            <ul style={{ listStyle: `none`, margin: 0 }}>
              {navLinks.map(({ to, label }) => (
                <li key={label} style={{ display: `inline-block`, margin: `0 20px` }}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  navLinks: arrayOf(
    shape({
      to: string,
      label: string,
    }),
  ),
  siteAuthor: string,
  siteTitle: string,
};

Header.defaultProps = {
  navLinks: [],
  siteAuthor: ``,
  siteTitle: ``,
};
