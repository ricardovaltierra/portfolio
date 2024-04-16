import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteMetadata } from '../../constants';

const SEO = () => {
  const {
    title,
    description,
    image,
  } = siteMetadata;

  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://deploy-preview-8--temporary-portfolio-deploy.netlify.app/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- X --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://deploy-preview-8--temporary-portfolio-deploy.netlify.app/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
