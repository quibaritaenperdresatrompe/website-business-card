import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Web developer (loving JavaScript) and generalist engineer (loving Astrophysics)</h2>
    <h3>
      <span role="img" aria-label="emoji-open-book">
        📖
      </span>{' '}
      Story
    </h3>
    <p>
      I am a graduate generalist engineer, specializing in software development. I developed an interest in the computing field
      during several periods of work experience: two internships (2013 & 2014) and an apprenticeship (2015).
    </p>
    <p>
      Since finishing my studies in 2015, I have begun to develop my own self-employment activity in parallel with my graduate
      studies. This began in my first graduate year when I developed a CRM tool (with Drupal) for a small company.
    </p>
    <p>My will and curiosity have led me to improve my computing knowledge by continuing in the web development field.</p>
    <p> During 2 years I have been specialized in C# .NET and since 2017 in JavaScript technologies especially ReactJS.</p>
    <p>
      A first 10-month experience as ReactJS developer at Cdiscount led me to a role as technical referent. Since 2017 I am
      working to improve developer experience, train developers, develop and maintain core libraries, and animate the developer
      community.
    </p>
    <h3>
      <span role="img" aria-label="emoji-rocket">
        🚀
      </span>{' '}
      Plan for the future
    </h3>
    <p>Work in nice team context to share human and technical knowledge.</p>
    <h3>
      <span role="img" aria-label="emoji-red-heart">
        ❤️
      </span>{' '}
      Fulfillment
    </h3>
    <p>
      I really love to have a look at the new technologies, especially JavaScript ones. At the moment I am trying out developing
      NodeJS CLI, deploying with Docker and Kubernetes, and building nice back-office applications with React Admin.
    </p>
    <p>I am really passionate about the sciences especially astrophysics.</p>
    <p>I love wood works, and regularly practice alpinism, climbing, and surfing.</p>
  </Layout>
);

export default IndexPage;
