import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

export default function Footer({ socialNetworks }) {
  return (
    <footer style={{ padding: 80 }}>
      <div id="contact">
        <h2>Contact me</h2>
        <p>
          By{' '}
          <a href="mailto:valentin.barit@gmail.com" target="_blank" rel="noopener noreferrer">
            sending me an email
          </a>
        </p>
        {socialNetworks.length > 0 && (
          <>
            <h2>Find me on</h2>
            <ul style={{ listStyle: `none`, marginLeft: 0 }}>
              {socialNetworks.map(({ name, url }) => (
                <li key={name} style={{ display: `inline-block`, marginRight: 20 }}>
                  <a target="_blank" rel="noopener noreferrer" href={url}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <h2 style={{ marginTop: 80 }}>How it was built ?</h2>
      <p>
        © {new Date().getFullYear()} - Bootstraped with{' '}
        <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
          GatsbyJS
        </a>{' '}
        and deployed with{' '}
        <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">
          GitLab
        </a>{' '}
        and{' '}
        <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
          Netlify
        </a>{' '}
        CI/CD.
      </p>
    </footer>
  );
}

Footer.propTypes = {
  navLinks: arrayOf(
    shape({
      url: string,
      name: string,
    }),
  ),
};

Footer.defaultProps = {
  navLinks: [],
};
