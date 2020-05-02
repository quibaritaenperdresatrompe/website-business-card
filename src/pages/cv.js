import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import ProfilePicture from '../components/ProfilePicture';

function totalYears(year, month = 1, day = 1) {
  return Math.abs(new Date(Date.now() - new Date(year, month - 1, day).getTime()).getUTCFullYear() - 1970);
}

function shortDate(year, month, language = 'en') {
  return new Date(year, month - 1).toLocaleDateString(language, {
    year: 'numeric',
    month: 'short',
  });
}

function diffMonths(beginDate, endDate) {
  return Math.abs(endDate.year - beginDate.year) * 12 + endDate.month + 1 - beginDate.month;
}

function Card({ children }) {
  return (
    <div
      style={{
        borderLeftWidth: `0.2rem`,
        borderLeftStyle: `solid`,
        margin: `1rem 0`,
        padding: `0 0 0 1rem`,
        pageBreakInside: `avoid`,
      }}
    >
      {children}
    </div>
  );
}

function WorkDuration({ beginDate, endDate }) {
  if (!beginDate || !beginDate.year || !beginDate.month) return null;

  return (
    <div>
      <strong>
        {diffMonths(
          beginDate,
          endDate || {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
          },
        )}{' '}
        months
      </strong>{' '}
      <small>
        {shortDate(beginDate.year, beginDate.month)} - {endDate ? shortDate(endDate.year, endDate.month) : 'Today'}
      </small>
    </div>
  );
}

function WorkExperience({ beginDate, endDate, jobTitle, companyName, location, description }) {
  return (
    <Card>
      <h4>{jobTitle.en}</h4>
      <p
        dangerouslySetInnerHTML={{
          __html: description.en || description.fr,
        }}
      />
      <div>
        <strong>{companyName}</strong> {location && <small>{location}</small>}
      </div>
      <WorkDuration beginDate={beginDate} endDate={endDate} />
    </Card>
  );
}

function Education({ beginDate, endDate, diplomaName, schoolName, location }) {
  return (
    <Card>
      <h4>{diplomaName.en}</h4>
      <div>
        <strong>{schoolName}</strong> {location && <small>{location}</small>}
      </div>
      <small>
        {shortDate(beginDate.year, beginDate.month)} - {endDate ? shortDate(endDate.year, endDate.month) : 'Today'}
      </small>
    </Card>
  );
}

export default function CvPage() {
  return (
    <Layout>
      <SEO title="Curiculum Vitae" />
      <div style={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}>
        <div style={{ width: 150, margin: `20px 0` }}>
          <ProfilePicture style={{ borderRadius: `50%` }} />
        </div>
        <h2>Web developer and generalist engineer</h2>
        <div>
          <span role="img" aria-label="emoji-round-pushpin">
            📍
          </span>{' '}
          Bordeaux, France
        </div>
        <div>
          {' '}
          <span role="img" aria-label="emoji-calendar">
            📅
          </span>{' '}
          {totalYears(2014)}+ years experienced
        </div>
      </div>
      <h3>Specialised in</h3>
      <ul>
        {['JavaScript', 'ReactJS', 'NodeJS'].map(spec => (
          <li key={spec}>{spec}</li>
        ))}
      </ul>
      <h3>Stack</h3>
      <ul>
        {[
          'Git',
          'Jest, ESLint, Prettier, Husky, Lint Staged, Conventional Changelog, Storybook',
          'Material UI, Styled Components',
          'Rollup, Webpack, Parcel',
          'Redux, Redux Saga, Apollo Client',
          'TFS Pipeline CI/CD, GitLab CI, GitHub CI, Docker, Netlify, Heroku',
          'Unix system',
        ].map(stack => (
          <li key={stack}>{stack}</li>
        ))}
      </ul>
      <h3>Work experiences</h3>
      {[
        {
          beginDate: { year: 2018, month: 3 },
          jobTitle: {
            en: 'Front ReactJS Lead',
            fr: 'Référent Front React',
          },
          companyName: 'Cdiscount',
          location: 'Bordeaux, France',
          description: {
            fr: `In the Core IT department:<br>
          - setting up and monitoring code quality<br>
          - build tools to improve DX<br>
          - technical community animation<br>
          - setting up a teaching program: classroom and e-learning<br>
          - technical review and sourcing<br>
          - core libraries development<br>
          `,
          },
        },
        {
          beginDate: { year: 2017, month: 1 },
          endDate: { year: 2017, month: 10 },
          jobTitle: {
            en: 'Web developer ReactJS',
            fr: 'Développeur web, ReactJS',
          },
          companyName: 'Cdiscount via Volt Europe',
          location: 'Bordeaux, France',
          description: {
            en:
              'Reworking the e-commerce website in a team (40 people) using continuous delivery (Git, TFS, Marathon)<br>- Build react components, libraries, and TUs (ReactJS, Redux, Redux Saga, Jest)<br>- Manage release packages and deployment to production during the last month',
            fr:
              "Refonte du site mobile de Cdiscount au sein d'une équipe, d'environ 40 personnes, fonctionnant sur un modèle de livraisons continues.<br>- Développement des différentes pages en ReactJS, construction de librairies de composants, et mise en place de TUs (ReactJS, Redux, Redux Saga, Jest)<br>- Gestion des livraisons et des déploiements durant le dernier mois",
          },
        },
        {
          beginDate: { year: 2017, month: 10 },
          endDate: { year: 2017, month: 12 },
          jobTitle: {
            en: 'Full-stack developer',
            fr: 'Développeur full-stack',
          },
          companyName: 'Cdiscount via Volt Europe',
          location: 'Bordeaux, France',
          description: {
            en:
              'Live system support of the checkout scope in a team of 10 people using the scrum methodology (C# .NET, SQL Server, TFS).',
            fr:
              "MCO du tunnel de commande chez Cdiscount au sein d'une équipe de 10 personnes utilisant la méthode agile SCRUM (C# .NET, SQL Server, TFS).",
          },
        },
        {
          beginDate: { year: 2014, month: 5 },
          endDate: { year: 2016, month: 6 },
          jobTitle: {
            en: 'Full-stack developer',
            fr: 'Développeur full-stack',
          },
          companyName: "Ride O'Meter",
          location: 'Anglet, France',
          description: {
            en:
              'Build a boardsports exposure analysis tool in a team of 4 people (C# .NET, MySQL, Facebook/Instagram/Twitter API, SVN).<br>- Lead social analytics frontend<br>- Design graphic interfaces and data visualization KPI<br>- Build social analytics backend<br>- Define data model/processing<br>- Disrupting monitoring<br>',
            fr:
              "Développement d'un outil mesurant l'exposition médiatique dans le domaine des sports de glisse au sein d'une équipe de 4 développeurs (C# .NET, MySQL, Facebook/Instagram/Twitter API, SVN).<br>- Lead frontend de l'outil d'analyse sociale<br>- Définition d'interfaces graphiques et de KPIs<br>- Développement du backend de l'outil d'analyse sociale<br>- Définition du modèle de données et de processus de récupération de données<br>- Monitoring et suivi d’incidents",
          },
        },
        {
          beginDate: { year: 2013, month: 7 },
          endDate: { year: 2013, month: 8 },
          jobTitle: {
            en: 'Full-stack developer',
            fr: 'Développeur full-stack',
          },
          companyName: 'Equipement Moderne',
          location: 'Salies de Béarn, France',
          description: {
            en: 'Build a CRM web platform dedicated to the customer management and daily reporting (Drupal 7, PHP, MySQL).',
            fr:
              "Développement d'une plateforme web dédiée à la gestion clientèle et au suivi journalier des forces de vente (Drupal 7, PHP, MySQL).",
          },
        },
        {
          beginDate: { year: 2013, month: 4 },
          endDate: { year: 2013, month: 5 },
          jobTitle: {
            en: 'Full-stack developer',
            fr: 'Développeur full-stack',
          },
          companyName: 'Osasuna Santé',
          location: 'Bidart, France',
          description: {
            en: 'Build a web platform dedicated to the human resources in the health sector (Drupal 7, PHP, MySQL).',
            fr:
              "Développement d'une plateforme web dédiée aux ressources humaines dans le domaine de la santé (Drupal 7, PHP, MySQL).",
          },
        },
      ].map(props => (
        <WorkExperience key={`${props.beginDate.year}-${props.beginDate.month}-${props.location}`} {...props} />
      ))}
      <h3>Education</h3>
      {[
        {
          beginDate: { year: 2012, month: 9 },
          endDate: { year: 2015, month: 9 },
          diplomaName: {
            en: 'Engineering degree: Sensitive systems',
            fr: "Diplôme d'Ingénieur, SENS Sensitive systems: Systèmes temps réel & sensibles",
          },
          schoolName: 'ESTIA',
          location: 'Bidart, France',
        },
        {
          beginDate: { year: 2014, month: 9 },
          endDate: { year: 2015, month: 9 },
          diplomaName: {
            en:
              'Master of science: Computational software techniques in engineering, option in Digital signal and image processing',
          },
          schoolName: 'Cranfield University',
          location: 'Cranfield, United Kingdom',
        },
      ].map(props => (
        <Education key={`${props.beginDate.year}-${props.beginDate.month}-${props.location}`} {...props} />
      ))}
    </Layout>
  );
}
