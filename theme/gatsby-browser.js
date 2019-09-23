
// Imports should be placed on top of the file

// Importing Global CSS file
import "./src/styles/global.css"
import 'typeface-roboto';

import React from 'react';
import BaseLayout from './src/components/layout/baseLayout';

export const wrapPageElement = ({ element }) => {
  return <BaseLayout>{element}</BaseLayout>;
};
