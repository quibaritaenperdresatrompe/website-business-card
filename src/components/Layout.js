/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import './layout.css';
import Header from './Header';
import Footer from './Footer';
import ThemeContext, { themes } from './ThemeContext';

const GlobalStyle = createGlobalStyle`
  header, main, footer {
    color: ${props => props.theme.foreground};
  }
  body {
    background-color: ${props => props.theme.background};
  }
`;

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => setTheme(prevTheme => (prevTheme === themes.dark ? themes.light : themes.dark));

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <GlobalStyle theme={theme} />
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteAuthor={data.site.siteMetadata.author}
          navLinks={[
            { to: '/', label: 'About me' },
            { to: '/cv', label: 'Curriculum vitae' },
            { to: '/#contact', label: 'Contact me' },
          ]}
        />
      </ThemeContext.Provider>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer
        socialNetworks={[
          { name: 'LinkedIn', url: 'https://www.linkedin.com/in/valentin-barit-1326bb64/' },
          { name: 'GitHub', url: 'https://github.com/quibaritaenperdresatrompe/' },
          { name: 'GitLab', url: 'https://gitlab.com/quibaritaenperdresatrompe/' },
        ]}
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
