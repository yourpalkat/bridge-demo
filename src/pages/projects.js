import React from 'react';

import Layout from '../components/Layout';

import utilStyles from '../styles/utilStyles.module.css';

const Projects = () => {
  return (
    <Layout>
      <div className={utilStyles.wrapper}>
        <div className={`${utilStyles.stripey} ${utilStyles.padded}`}>
          <h1>Projects</h1>
        </div>

        <div className={utilStyles.padded}>
          <p>Hey, check out these cool projects I worked on.</p>
          <ul className={utilStyles.projectList}>
            <li>
              <div className={`${utilStyles.stripey} ${utilStyles.padded}`}>
                <div className={utilStyles.subtitle}>
                  <h2>Project One</h2>
                </div>
              </div>
              <p>Posted Jan 2020</p>
            </li>
          </ul>

        </div>
      </div>
    </Layout>
  );
}

export default Projects;
