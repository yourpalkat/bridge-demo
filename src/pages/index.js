import React from 'react';

import Layout from '../components/Layout';

import '../styles/styles.css';
import utilStyles from '../styles/utilStyles.module.css';
import flick from '../images/flick.png';

const Homepage = () => {
  return (
    <Layout>
      <div className={utilStyles.wrapper}>
        <div className={`${utilStyles.stripey} ${utilStyles.padded}`}>
          <h1>Oh hey. I'm Flick.</h1>
        </div>

        <div className={`${utilStyles.stripey} ${utilStyles.padded}`}>
          <div className={utilStyles.subtitle}>
            <h2>Welcome to my portfolio!</h2>
          </div>
        </div>

        <div className={`${utilStyles.padded} ${utilStyles.twoColumn}`}>
          <div>
            <img src={flick} alt='Flick holding a net' />
          </div>
          <div>
            <p>I'm Flick, a salamander. I LOVE BUGS! I mean, uh, they're pretty cool, I guess. (Play it cool, Flick, play it cool.) This is my portfolio!</p>
            <p>It is sheer hubris to think that we could ever learn everything about bugs.
Bugs are an experience. They are a conversation...one between the viewer and the universe.</p>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Homepage;
