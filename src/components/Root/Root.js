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
import ExperienceView from 'components/ExperienceView/ExperienceView';

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
          <ExperienceView />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2525.4622220137326!2d16.653335238098148!3d50.72991540132808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a71eb6138e7a55a!2sCom+Net-+komputery!5e0!3m2!1spl!2spl!4v1559408282794!5m2!1spl!2spl"
            title="map"
            frameBorder="0"
            style={{ border: 0, width: `${100}vw`, height: 450 }}
            allowFullScreen
          />
        </>
      </ThemeProvider>
    </>
  );
};

export default Root;
