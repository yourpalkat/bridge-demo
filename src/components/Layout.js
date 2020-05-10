import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        {pageTitle ? (
          <title>{`${data.site.siteMetadata.title} | ${pageTitle}`}</title>
        ) : (
          <title>{data.site.siteMetadata.title}</title>
        )}
        <meta 
          name="description"
          content={data.site.siteMetadata.description} 
        />
      </Helmet>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;