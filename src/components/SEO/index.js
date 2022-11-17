import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteMetadata } from '../../constants';

const SEO = () => {
  const {
    title,
    description,
    type,
    siteName,
    locale,
    author,
    image,
  } = siteMetadata;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="article:author" content={author} />
      <meta property="ig:image" content={image} />
    </Helmet>
  );
};

export default SEO;
