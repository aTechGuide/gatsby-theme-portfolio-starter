/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import BaseLayout from './src/components/layout/baseLayout';

export const wrapPageElement = ({ element }) => {
  return <BaseLayout>{element}</BaseLayout>;
};
