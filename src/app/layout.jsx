// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google'; // THEME PROVIDER
import React from 'react';
import ThemeProvider from 'theme/theme-provider'; // PRODUCT CART PROVIDER

import SettingsProvider from 'contexts/SettingContext'; // GLOBAL CUSTOM COMPONENTS
import PropTypes from 'prop-types';

import { RTL } from 'components/rtl';
import { ProgressBar } from 'components/progress';

export const openSans = Open_Sans({
  subsets: ['latin'],
}); // IMPORT DUMMY SERVER

const RootLayout = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={openSans.className}>
      <SettingsProvider>
        <ThemeProvider>
          <ProgressBar />
          <RTL>{children}</RTL>
        </ThemeProvider>
      </SettingsProvider>
    </body>
  </html>
);

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
