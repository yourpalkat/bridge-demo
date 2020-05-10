import React from 'react';

import Layout from '../components/Layout';

import utilStyles from '../styles/utilStyles.module.css';

const About = () => {
  return (
    <Layout pageTitle='About Me'>
      <div className={utilStyles.wrapper}>
        <div className={`${utilStyles.stripey} ${utilStyles.padded}`}>
          <h1>About me</h1>
        </div>

        <div className={utilStyles.padded}>
          <p>I make artwork based on bugs. If you bring me three bugs of the same type, I will make a sculpture for you. </p>
          <p>If you find yourself where there are no bugs...you have to visualize and manifest them yourself!</p>
          <p>Close your eyes. Reach with your mind. Feel the bugs. Feel them crawling all over your skin. Dissolve.</p>
        </div>
      </div>
    </Layout>
  );
}

export default About;