import React from 'react';

import Layout from '../components/Layout';

import utilStyles from '../styles/utilStyles.module.css';

const SingleProject = () => {
  return (
    <Layout>
      <div className={utilStyles.wrapper}>
        <div className={`${utilStyles.stripey} ${utilStyles.padded}`}>
          <h1>Project Page Template</h1>
        </div>
        
        <div className={utilStyles.padded}>
          content goes here!
        </div>
      </div>
    </Layout>
  );
}

export default SingleProject;
