import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import HeroView from 'components/HeroView/HeroView';
import { theme } from 'theme/mainTheme';
import OurHistoryView from 'components/OurHistoryView/OurHistoryView';
import HelpView from 'components/HelpView/HelpView';
import StatisticsFAQView from 'components/StatisticsFAQView/StatisticsFAQView';
import ContactAboutView from 'components/ContactAboutView/ContactAboutView';

const Root = () => {
  return (
    <>
      <Helmet>
        <title>Com - Net</title>
        <meta name="description" content="Salon komputerowy" />
        {/* <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charset="utf-8" />
      </Helmet>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <HeroView />
          <OurHistoryView />
          <HelpView />
          <StatisticsFAQView />
          <ContactAboutView />
        </>
      </ThemeProvider>
    </>
  );
};

export default Root;
