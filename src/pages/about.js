import React from 'react';

import Layout from '../components/Layout';

import utilStyles from '../styles/utilStyles.module.css';

const About = () => {
  return (
    <Layout>
      <div className={utilStyles.wrapper}>
        <div className={`${utilStyles.stripey} ${utilStyles.padded}`}>
          <h1>About me</h1>
        </div>

        <div className={utilStyles.padded}>
          <p>Snackwave cliche gentrify squid. Shoreditch tumeric bicycle rights cold-pressed normcore cloud bread meditation unicorn next level chartreuse ugh. Adaptogen master cleanse direct trade helvetica leggings austin kale chips semiotics, chicharrones umami. Fingerstache YOLO tumeric lomo prism church-key. Semiotics brunch chia letterpress vaporware everyday carry kickstarter pitchfork plaid franzen YOLO organic tacos craft beer mumblecore.</p>
        </div>
      </div>
    </Layout>
  );
}

export default About;